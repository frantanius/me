export interface Prompt {
  isActive?: boolean;
  inputValue?: string;
  children?: JSX.Element | null;
}

export interface ILink {
  data: {
    id: number;
    attributes: {
      gitHub: string;
      twitter: string;
      instagram: string;
      email: string;
      resume: string;
      createdAt: string;
      updatedAt: string;
      linkedIn: string;
    };
  };
}

interface IMeta {
  pagination?: {
    page: number;
    pageSize: number;
    pageCount: number;
    total: number;
  };
}

export interface IEducation {
  id: number;
  attributes: {
    name: string;
    degree: string | null;
    major: string;
    gpa: number | null;
    location: string;
    startDate: string;
    endDate: string;
    description: string;
    createdAt: string;
    updatedAt: string;
  };
}

export interface IEducationsResponse {
  data: IEducation[];
  meta: IMeta;
}

export interface IExperience {
  id: number;
  attributes: {
    title: string;
    employmentType: string;
    companyName: string | null;
    location: string | null;
    locationType: string | null;
    startDate: string;
    endDate: string | null;
    currentlyEmployed: boolean;
    description: string;
    createdAt: string;
    updatedAt: string;
  };
}

export interface IExperiencesResponse {
  data: IExperience[];
  meta: IMeta;
}

export interface ISkill {
  id: number;
  attributes: {
    name: string;
    createdAt: string;
    updatedAt: string;
  };
}

export interface ISkillCategory {
  id: number;
  attributes: {
    category: string;
    createdAt: string;
    updatedAt: string;
    skills: {
      data: ISkill[];
    };
  };
}

export interface ISkillCategoriesResponse {
  data: ISkillCategory[];
  meta: IMeta;
}

export interface IImageFormat {
  name: string;
  hash: string;
  ext: string;
  mime: string;
  width: number;
  height: number;
  size: number;
  url: string;
}

export interface IApiImage {
  id: number;
  attributes: {
    alternativeText: string | null;
    caption: string | null;
    formats: {
      thumbnail: IImageFormat & { path: string | null };
      small: IImageFormat & { path: string | null };
      medium: IImageFormat & { path: string | null };
      large: IImageFormat & { path: string | null };
    };
    previewUrl: string | null;
    provider: string;
    provider_metadata: string | null;
    createdAt: string;
    updatedAt: string;
  } & IImageFormat;
}

export interface ISeo {
  id: number;
  metaTitle: string;
  metaDescription: string;
  keywords: string;
  metaRobots: string | null;
  structuredData: string | null;
  metaViewport: string | null;
  canonicalUrl: string;
  metaImage: {
    data: IApiImage;
  };
  metaSocial: Array<{
    id: number;
    socialNetwork: string;
    title: string;
    description: string;
    image: {
      data: IApiImage;
    };
  }>;
}

export interface IProject {
  id: number;
  attributes: {
    name: string;
    type: string;
    description: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    repository: string | null;
    website: string | null;
    websiteLabel: string | null;
    slug: string;
    shortDescription: string;
    skills: {
      data: ISkill[];
    };
    cover: {
      data: IApiImage;
    };
    seo: ISeo;
  };
}

export interface IProjectsResponse {
  data: IProject[];
  meta: IMeta;
}

export interface IProjectResponse {
  data: IProject;
  meta: IMeta;
}

export interface IHomeResponse {
  data: {
    id: number;
    attributes: {
      title: string;
      subtitle: string;
      shortSummary: string;
      summary: string;
      anotherSide: string;
      createdAt: string;
      publishedAt: string;
      updatedAt: string;
      seo: ISeo;
    };
  };
  meta?: IMeta;
}
