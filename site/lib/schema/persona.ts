import { z } from "zod";
import {
  personaAgentmailSchema,
  personaIdentitySchema,
  personaJourneySchema,
  personaOnboardingSchema,
  personaProfileSchema,
  parsePersonaProfile,
  safeParsePersonaProfile,
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore — resolved at runtime; tsconfig allowJs covers .mjs imports
} from "./persona.mjs";

export {
  personaAgentmailSchema,
  personaIdentitySchema,
  personaJourneySchema,
  personaOnboardingSchema,
  personaProfileSchema,
  parsePersonaProfile,
  safeParsePersonaProfile,
};

export type PersonaIdentity = z.infer<typeof personaIdentitySchema>;
export type PersonaJourney = z.infer<typeof personaJourneySchema>;
export type PersonaAgentmail = z.infer<typeof personaAgentmailSchema>;
export type PersonaOnboarding = z.infer<typeof personaOnboardingSchema>;
export type PersonaProfile = z.infer<typeof personaProfileSchema>;
