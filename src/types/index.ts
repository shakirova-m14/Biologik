export interface LegalBasisCard {
  id: string;
  title: string;
  category: string;
  description: string;
  officialReference: string;
  keyNorm: string;
}

export interface LegalExample {
  id: string;
  title: string;
  situation: string;
  legalIssue: string;
  applicableLaw: string;
  consequenceSummary: string;
  image: string;
  badge: string;
}

export interface LegalSolution {
  number: string;
  title: string;
  description: string;
  legalMechanism: string;
}

export interface LiabilityType {
  id: string;
  type: string;
  badgeColor: string;
  definition: string;
  scope: string;
  sanctionDescription: string;
}

export interface PipelineStep {
  stepNumber: number;
  label: string;
  detail: string;
  legalAction: string;
}

export interface WarningConsequence {
  id: string;
  title: string;
  description: string;
  impactArea: string;
}

export interface DiscussionDirection {
  id: string;
  question: string;
  promptText: string;
  studentKeypoints: string[];
}

export interface QuizQuestion {
  id: number;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}
