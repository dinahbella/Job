"use server";

import { z } from "zod";
import requireUser from "./utils/requireUser";
import { companySchema, individualSchema } from "./utils/zodSchema";
import { prisma } from "./utils/db";
import { redirect } from "next/navigation";

export async function createCompany(data: z.infer<typeof companySchema>) {
  const session = await requireUser();
  const validateData = companySchema.parse(data);
  await prisma.user.update({
    where: {
      id: session.id,
    },
    data: {
      onboardingCompleted: true,
      userType: "COMPANY",
      Company: {
        create: {
          ...validateData,
        },
      },
    },
  });
  return redirect("/");
}
export async function createIndividual(data: z.infer<typeof individualSchema>) {
  const session = await requireUser();
  const validateData = individualSchema.parse(data);
  await prisma.user.update({
    where: {
      id: session.id,
    },
    data: {
      onboardingCompleted: true,
      userType: "INDIVIDUAL",
      Individual: {
        create: {
          ...validateData,
        },
      },
    },
  });
  return redirect("/");
}
