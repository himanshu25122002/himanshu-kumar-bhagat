export const profile = {
  name: "Himanshu Kumar Bhagat",
  role: "AI/ML Engineer & Researcher",
  tagline: "NLP · LLMs · Generative AI · Computer Vision",
  location: "Delhi, India",
  email: "himanshubhagat2512@gmail.com",
  phone: "+91-9717540520",
  linkedin: "https://www.linkedin.com/in/himanshu-kumar-bhagat/",
  github: "https://github.com/himanshu25122002",
  resumeUrl:
    "https://drive.google.com/file/d/1S4z1sQlDgG1cgAf3tPDR50Y6tdPyMuPM/view?usp=sharing",
  researchCvUrl:
    "https://drive.google.com/file/d/1P2Enb_nn7rT251-955IMYD9b0IbH5IYZ/view?usp=sharing",
  heroDescription:
    "AI/ML Engineer & Researcher — first author of two published research papers, including an IEEE Best Paper Award-winning study, with hands-on experience building deep learning and LLM-based systems.",
  about:
    "AI/ML engineer and researcher specializing in Natural Language Processing, Large Language Models, Generative AI, and Computer Vision. First author of two published research papers, including an IEEE Best Paper Award-winning study on legal-document NLP, with hands-on experience building Transformer, LLM, and deep learning systems end-to-end — from architecture and training to deployment.",
};

export const experience = [
  {
    company: "Futuready Media",
    role: "AI Intern",
    period: "Jan 2026 \u2013 Mar 2026",
    bullets: [
      "Built an LLM-based AI recruitment system automating resume screening within an end-to-end hiring pipeline.",
      "Implemented and experimented with AI-based interview evaluation workflows, iterating on automated hiring-task pipelines.",
    ],
    tech: ["LLMs", "Python", "AI Workflow Automation"],
  },
  {
    company: "AICAN Private Limited",
    role: "Artificial Intelligence Intern",
    period: "Feb 2023 \u2013 Mar 2023",
    bullets: [
      "Performed exploratory data analysis (EDA) and data preprocessing to improve dataset quality for downstream modeling.",
      "Built an ML workflow supporting predictive analysis and data-driven decision-making.",
    ],
    tech: ["Python", "EDA", "Machine Learning"],
  },
];

export const education = {
  institution: "Chandigarh University",
  degree: "B.E. — Computer Science Engineering (Artificial Intelligence & Machine Learning)",
  period: "2022–2026",
};

export const publications = [
  {
    id: "lesa",
    title:
      "LESA: A BERT-Based Legal Document Summarization and Clause Extraction Framework",
    status: "First Author \u00b7 Published \u00b7 IEEE iCONECCT 2025",
    award: "Best Paper Award (Session 17)",
    venue:
      "Proceedings of the 2025 IEEE International Conference on Electrical, Communication and Computing Technologies (iCONECCT), Gwalior, India",
    description:
      "A hybrid framework combining a fine-tuned BART model for abstractive summarization with a Legal-BERT-based classifier and rule-based refinement for multi-label clause extraction, evaluated against traditional and neural baselines on a curated legal-document dataset.",
    metrics: [
      { label: "Legal documents", value: "1,250" },
      { label: "Clause categories", value: "15" },
      { label: "ROUGE-1", value: "0.68" },
      { label: "Clause extraction F1", value: "0.82" },
    ],
    links: [
      { label: "IEEE Xplore", href: "https://ieeexplore.ieee.org/document/11470267" },
      { label: "DOI", href: "https://doi.org/10.1109/iCONECCT67014.2025.11470267" },
    ],
  },
  {
    id: "rice-leaf",
    title:
      "Enhanced Rice Leaf Disease Detection: A Hybrid Deep Learning Approach",
    status: "First Author \u00b7 Published \u00b7 IJSREM, Vol. 09, Issue 04, 2025",
    award: null,
    venue:
      "International Journal of Scientific Research in Engineering and Management (IJSREM), 9(4)",
    description:
      "A hybrid deep learning architecture combining a fine-tuned ResNet50V2 backbone with a custom classification head, trained on a large augmented image dataset for automated rice leaf disease classification.",
    metrics: [
      { label: "Training images", value: "15,023" },
      { label: "Disease classes", value: "10" },
      { label: "Test accuracy", value: "99.53%" },
      { label: "Macro F1-score", value: "1.00" },
    ],
    links: [
      { label: "DOI", href: "https://doi.org/10.55041/IJSREM46332" },
    ],
  },
];

export const conferencePresentation = {
  title: "A Hybrid CNN\u2013Transformer Model for Medical Image Classification",
  status: "Oral Conference Presentation · Not Published",
  venue: "InnovEST 2026, NIT Jamshedpur \u00b7 April 3\u20134, 2026",
  description:
    "Presented on behalf of a five-member research team; awarded a Certificate of Oral Presentation. This work was presented at the conference and has not been published.",
};

export const awards = [
  {
    title: "Best Paper Award",
    detail: "IEEE iCONECCT 2025 (Session 17), for LESA",
  },
  {
    title: "Selected Awardee \u2014 Research Excellence & Innovation Award",
    detail:
      "CV-S3 2026, International Conference on Computer Vision for Smart Sustainable Systems, MAHE Dubai Campus, September 23\u201324, 2026",
  },
  {
    title: "Winner \u2014 Devpost Hackathon 2025",
    detail: "MedInstructAI (applied AI project)",
  },
];

export const projects = [
  {
    name: "AI Poetry Generator",
    description:
      "Transformer-based language model implemented from scratch \u2014 attention mechanism, custom tokenizer, and training loop \u2014 fine-tuned on a custom poetry dataset under limited compute resources.",
    tech: ["Transformers", "PyTorch", "NLP", "Fine-tuning"],
    github: "https://github.com/himanshu25122002/AI-Poetry-Generator",
  },
  {
    name: "MedInstructAI",
    description:
      "End-to-end GenAI pipeline translating complex medical reports into plain-language, multilingual voice-output explanations for non-expert users. Devpost Hackathon Winner, 2025.",
    tech: ["Generative AI", "Multilingual NLP", "Voice Synthesis"],
    github: "https://github.com/himanshu25122002/MedInstructAI",
  },
  {
    name: "Rice Leaf Disease Detection",
    description:
      "Hybrid deep learning model (ResNet50V2 + custom classification head) for automated rice leaf disease classification, achieving 99.53% test accuracy. Published research, IJSREM 2025.",
    tech: ["ResNet50V2", "TensorFlow", "Computer Vision"],
    github: "https://github.com/himanshu25122002/Rice-leave-disease-detection",
  },
  {
    name: "AI News Anchor Video Generator",
    description:
      "Multi-stage AI video generation pipeline \u2014 script generation, voice synthesis, and avatar-based rendering \u2014 converting real news text into anchor-style videos.",
    tech: ["Generative AI", "Voice Synthesis", "Video Generation"],
    github: "https://github.com/himanshu25122002/AI-News-Anchor",
  },
  {
    name: "Yuno Agent Platform",
    description:
      "Visual multi-agent orchestration platform for creating specialized AI agents, connecting them into workflows, and executing tasks through collaborative teams. Includes a visual workflow builder and live execution monitoring.",
    tech: ["React", "FastAPI", "LangGraph"],
    github: "https://github.com/himanshu25122002/AI-Agent-Platform",
  },
  {
    name: "AI Screening",
    description:
      "AI-powered hiring workflow for managing openings, screening resumes against job requirements, and conducting adaptive interviews. Supports candidate evaluation, final-interview scheduling, and hiring-pipeline analytics.",
    tech: ["FastAPI", "Streamlit", "Supabase"],
    github: "https://github.com/himanshu25122002/AI-Screening",
  },
];

export const skills = [
  {
    category: "Programming",
    items: ["Python", "SQL"],
  },
  {
    category: "Deep Learning",
    items: [
      "PyTorch",
      "TensorFlow",
      "CNNs (ResNet / ResNet50V2)",
      "Transformer Architectures",
    ],
  },
  {
    category: "Machine Learning",
    items: [
      "Machine Learning",
      "Transfer Learning",
      "Model Training & Evaluation",
    ],
  },
  {
    category: "NLP / Generative AI",
    items: [
      "BERT",
      "BART",
      "Legal-BERT",
      "Large Language Models (LLMs)",
      "Prompt Engineering",
      "Fine-tuning",
      "Conversational AI",
      "Multilingual Generation",
    ],
  },
  {
    category: "Computer Vision",
    items: ["CNNs", "Image Classification", "Data Augmentation"],
  },
  {
    category: "Data & Experimentation",
    items: [
      "Pandas",
      "NumPy",
      "Matplotlib",
      "Seaborn",
      "Data Preprocessing",
      "EDA",
      "ROUGE / BERTScore / F1 / Precision / Recall",
    ],
  },
  {
    category: "Tools & Platforms",
    items: [
      "Hugging Face Transformers",
      "spaCy",
      "Microsoft Azure",
      "PySpark",
      "Databricks",
    ],
  },
];

export const certifications = [
  "Microsoft Certified \u2014 Azure AI Fundamentals",
  "Oracle Cloud Infrastructure \u2014 Generative AI",
  "GenAI Powered Data Analytics \u2014 Job Simulation, Forage (TATA Group), Dec 2025",
];

export const nav = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Research", href: "#research" },
  { label: "Projects", href: "#projects" },
  { label: "Awards", href: "#awards" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];
