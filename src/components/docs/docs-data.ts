export interface DocStep {
    title: string;
    description: string;
    image: string;
}

export interface DocSubSection {
    id: string;
    title: string;
    badge?: string;
    content: DocContentBlock[];
    steps?: DocStep[];
    mainImage?: string;
}

export interface DocContentBlock {
    type: "paragraph" | "list" | "heading" | "code" | "callout" | "divider";
    text?: string;
    items?: string[];
    variant?: "info" | "tip" | "warning";
}

export interface DocSection {
    id: string;
    title: string;
    subSections: DocSubSection[];
}

export const docsData: DocSection[] = [
{
id: "getting-started",
title: "Getting Started",
subSections: [
{
id: "install-adro",
title: "Install ADRO Desktop",
badge: "Setup",
mainImage: "/install-adro.png",
content: [
{
type: "paragraph",
text: "To begin using ADRO Desktop, install the application on your system and launch it. No account registration is required.",
},
{
type: "list",
items: [
"Install the ADRO Desktop application",
"Launch the application after installation",
"No account creation required",
"Runs locally on your system",
],
},
],
steps: [
{
title: "Download Application",
description: "Download the ADRO Desktop installer.",
image: "/install-step1.png",
},
{
title: "Install ADRO",
description: "Run the installer, complete the installation process.",
image: "/install-step2.png",
},
{
title: "Launch Application",
description: "Open ADRO Desktop to begin analyzing your datasets.",
image: "/install-step3.png",
},
],
},

{
id: "configure-model",
title: "Configure AI Model",
badge: "AI Setup",
mainImage: "/install-adro.png",
content: [
{
type: "paragraph",
text: "When launching ADRO for the first time, you can configure the AI model used for data analysis by going to settings page.",
},
{
type: "heading",
text: "Available Options",
},
{
type: "list",
items: [
"Go to Settings → Add New LLM to configure your AI models",
"Choose a Local LLM for private analytics",
"Connect to Cloud LLMs such as Gemini or ChatGPT",
"Paste your API key for cloud models",
"Select your preferred AI model",
],
},
{
type: "callout",
variant: "tip",
text: "ADRO can run entirely locally for private analytics or use powerful cloud AI models depending on your configuration.",
},
],
},
],
},

{
id: "platform-overview",
title: "Platform Overview",
subSections: [
{
id: "sidebar-navigation",
title: "Sidebar Navigation",
badge: "Workspace",
mainImage: "/install-adro.png",
content: [
{

type: "paragraph",
text: "Once ADRO opens, the main workspace includes a sidebar that helps you manage your analytics sessions and datasets.",

},

{
type: "list",
items: [
"Create a New Chat Session",
"Search previous conversations",
"Access chat history",
"View generated insights and charts",
],
},
],
},
],
},

{
id: "uploading-data",
title: "Uploading Data",
subSections: [
{
id: "data-sources",
title: "Supported Data Sources",
badge: "Data Input",
content: [
{
type: "paragraph",
text: "ADRO supports multiple dataset formats and database connections.",
},
{
type: "list",
items: [
"Excel (.xlsx) files",
"CSV datasets",

],
},
],
},

{
id: "upload-dataset",
title: "Upload Dataset",
badge: "Data Upload",
mainImage: "/upload-dataset.png",
content: [
{
type: "list",
items: ["Uploading  a dataset in ADRO is simple and requires only a few steps",
     "After uploading a dataset, users can add metadata to help ADRO understand the dataset context",
     "Dataset descriptionColumn meaningsBusiness context Important metrics"
     
],
},
],
steps: [
{
title: "Open Upload Page",
description: "Navigate to the Upload.",
image: "/upload-step1.png",
},
{
title: "Select Data Source",
description: "Upload a dataset file.",
image: "/upload-step2.png",
},
{
title: "Adding Metadata",
description: "Define Dataset Context",
image: "/upload-step3.png",
},
],
},
],
},

// {
// id: "dataset-metadata",
// title: "Adding Dataset Metadata",
// subSections: [
// {
// id: "metadata-info",
// title: "Define Dataset Context",
// badge: "Metadata",
// content: [
// {
// type: "paragraph",
// text: "After uploading a dataset, users can add metadata to help ADRO understand the dataset context.",
// },
// {
// type: "list",
// items: [
// "Dataset description",
// "Column meanings",
// "Business context",
// "Important metrics",
// ],
// },
// {
// type: "callout",
// variant: "info",
// text: "Providing metadata allows ADRO to generate more accurate insights and explanations.",
// },
// ],
// },
// ],
// },

{
id: "data-cleaning",
title: "Data Cleaning",
subSections: [
{
id: "cleaning-tools",
title: " Data Cleaning",
badge: "Data Preparation",
mainImage: "/upload-dataset.png",
content: [
{
type: "paragraph",
text: "ADRO analyzes the uploaded dataset and suggests data cleaning actions.",
},
{
type: "list",
items: [
"Detect missing values",
"Identify inconsistent formats",
"Highlight potential data issues",
"Suggest automated fixes",
],

},
{
type: "paragraph",
text: "Users can select from the suggested cleaning actions instantly to prepare the dataset for analysis.",

},
],
},
],
},

{
  id: "charts-dashboards",
  title: "Charts and Dashboards",
  subSections: [
    {
      id: "chart-dashboard-insights",
      title: "Charts, Dashboards & Insights",
      badge: "Visualization",
      mainImage: "/dashboard.png",
      content: [
        {
          type: "paragraph",
          text: "Once your dataset is cleaned, ADRO can  generate charts, dashboards, and deeper insights from your data."
        },
        {
          type: "list",
          items: [
            "Generate charts using AI",
            "Select different chart types",
            "Customize visualizations",
            "Explore patterns and trends",
            "View chat history of analysis",
            "Explore previous insights",
            "Generate quick charts",
            "Analyze top categories in the dataset"
          ],
        },
      ],
    },
  ],
},
//   
{
id: "ask-questions",
title: "Ask Questions to Your Data",
subSections: [
{
id: "chat-with-data",
title: "Natural Language Queries",
badge: "AI Interaction",
content: [
{
type: "paragraph",
text: "ADRO allows users to interact directly with their dataset using natural language queries.",
},
{
type: "heading",
text: "Example Questions",
},
{
type: "list",
items: [
"Show sales trends over time",
"Which region performed best?",
"Compare monthly revenue performance",
"Generate a product performance dashboard",
"Analyze top performing categories",
],
},
{
type: "paragraph",
text: "ADRO analyzes your dataset, detects patterns, generates charts, builds dashboards, and explains insights in natural language.",
},
],
},
],
},

// {
// id: "settings",
// title: "Settings",
// subSections: [
// {
// id: "model-settings",
// title: "Configure AI Models",
// badge: "Settings",
// content: [
// {
// type: "paragraph",
// text: "Inside Settings, users can configure which AI models ADRO uses for analysis.",
// },
// {
// type: "list",
// items: [
// "Select Local LLM",
// "Connect Cloud LLMs such as Gemini or ChatGPT",
// "Enter API keys",
// "Choose preferred AI model",
// ],
// },
// ],
// },
// ],
// },

{
id: "security",
title: "Data Privacy",
subSections: [
{
id: "privacy",
title: "Local Processing",
badge: "Security",
content: [
{
type: "paragraph",
text: "ADRO is designed for secure and private analytics.",
},
{
type: "list",
items: [
"Data can be processed locally on your system",
"No data needs to be uploaded to external servers",
"Users maintain full control over datasets",
"Suitable for enterprise and sensitive data environments",
],
},
],
},
],
},
];