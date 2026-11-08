import { Project } from "@/types";

export const projectsData: Project[] = [
  {
    id: "smart-cooking-assistant",
    title: "AI-Based Smart Cooking Assistant",
    description: "An intelligent cooking assistant combining fine-tuned transformer computer vision models with a RAG pipeline for real-time food ingredient recognition and contextual recipe recommendations.",
    category: "ai",
    technologies: ["Python", "YOLO", "LangChain", "RAG", "PyTorch", "Computer Vision"],
    githubUrl: "https://github.com/trgphun",
    demoUrl: "https://github.com/trgphun",
    period: "05/2025 – 09/2025",
    highlights: [
      "Crawled, cleaned, and labeled a dataset of ~14,000 food images for ingredient recognition",
      "Fine-tuned YOLO for real-time high-accuracy food-ingredient detection",
      "Engineered a RAG-based recipe recommendation system using LangChain"
    ],
    featured: true
  },
  {
    id: "transformer-gan-restoration",
    title: "Image Restoration Using Transformer-GAN",
    description: "A deep learning visual reconstruction pipeline combining self-attention transformer blocks with generative adversarial networks (GAN) for high-fidelity image restoration.",
    category: "ai",
    technologies: ["Python", "PyTorch", "Transformer-GAN", "OpenCV", "Deep Learning"],
    githubUrl: "https://github.com/trgphun",
    period: "01/2025 – 04/2025",
    highlights: [
      "Implemented a Transformer-GAN based image restoration architecture",
      "Achieved a 64% improvement in SSIM (Structural Similarity Index) on evaluated restoration tasks",
      "Trained on custom benchmark datasets with perceptual loss optimization"
    ],
    featured: true
  },
  {
    id: "dewly-rbac-knowledge-router",
    title: "Standalone RBAC Microservice & Multi-Source Knowledge Router",
    description: "High-performance FastAPI service providing fine-grained authorization APIs with chunk-level permission filtering on Qdrant vector payloads and routing between Qdrant and LightRAG.",
    category: "backend",
    technologies: ["FastAPI", "Python", "Qdrant", "LightRAG", "Langfuse", "Docker"],
    githubUrl: "https://github.com/trgphun",
    period: "05/2026 – 08/2026",
    highlights: [
      "Chunk-level permission filtering on Qdrant payloads for secure RAG across HR/Finance/Tech agents",
      "Knowledge Router exposing Qdrant & LightRAG as LLM-routable tools, eliminating intent classifiers",
      "Automated evaluation pipeline combining Langfuse tracing with deepeval metrics"
    ],
    featured: true
  },
  {
    id: "wiki-llm-assistant",
    title: "Personal Knowledge-Base Assistant (Wiki LLM)",
    description: "Personal knowledge chatbot built following Karpathy's Wiki LLM architecture with stateful memory, agentic workflow automation, and a Chainlit chat UI.",
    category: "ai",
    technologies: ["LangChain", "LangGraph", "Chainlit", "Hermes Agent", "Python"],
    githubUrl: "https://github.com/trgphun",
    demoUrl: "https://github.com/trgphun",
    period: "2026",
    highlights: [
      "Implemented LangChain & LangGraph state graphs for multi-step reasoning",
      "Integrated Hermes Agent with Google Calendar and Lark/Feishu for daily workflow automation",
      "Interactive conversational UI powered by Chainlit"
    ],
    featured: false
  },
  {
    id: "facial-recognition-attendance",
    title: "Student Attendance by Facial Recognition",
    description: "Automated student attendance check-in system designed and trained with deep learning facial recognition models for high-accuracy campus verification.",
    category: "ai",
    technologies: ["Python", "TensorFlow", "Scikit-learn", "OpenCV", "Deep Learning"],
    githubUrl: "https://github.com/trgphun",
    period: "09/2023 – 03/2024",
    highlights: [
      "Designed and trained deep learning models for facial-recognition-based attendance",
      "Achieved 82% recognition accuracy and benchmarked multiple ML/DL architectures",
      "Built real-time video frame capture and inference pipeline"
    ],
    featured: false
  }
];
