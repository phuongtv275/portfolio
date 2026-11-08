import * as React from "react";
import {
  SiPython,
  SiPytorch,
  SiTensorflow,
  SiScikitlearn,
  SiOpencv,
  SiNumpy,
  SiPandas,
  SiR,
  SiLangchain,
  SiQdrant,
  SiFastapi,
  SiPostgresql,
  SiMongodb,
  SiDocker,
  SiGit,
  SiLinux,
  SiOpentelemetry,
  SiOpenapiinitiative,
  SiSpringboot,
  SiApachekafka,
  SiMysql,
  SiRedis,
  SiElasticsearch,
  SiAnthropic,
} from "react-icons/si";
import { FaAws, FaJava } from "react-icons/fa6";
import { Cpu, ShieldCheck, Layers, Bot, Database, Sparkles, Workflow, Network, Server } from "lucide-react";

interface TechIconProps extends React.SVGProps<SVGSVGElement> {
  name: string;
}

export function TechIcon({ name, className = "w-5 h-5", ...props }: TechIconProps) {
  const normalized = name.toLowerCase();

  // Programming languages
  if (normalized.includes("python")) return <SiPython className={className} {...props} />;
  if (normalized.includes("java") && !normalized.includes("script")) return <FaJava className={className} {...props} />;
  if (normalized === "r" || normalized.includes(" r")) return <SiR className={className} {...props} />;

  // Backend & Distributed Architecture
  if (normalized.includes("spring")) return <SiSpringboot className={className} {...props} />;
  if (normalized.includes("kafka")) return <SiApachekafka className={className} {...props} />;
  if (normalized.includes("eureka")) return <Network className={className} {...props} />;
  if (normalized.includes("resilience")) return <ShieldCheck className={className} {...props} />;
  if (normalized.includes("microservice") || normalized.includes("gateway")) return <Server className={className} {...props} />;
  if (normalized.includes("fastapi")) return <SiFastapi className={className} {...props} />;
  if (normalized.includes("rest") || normalized.includes("openapi")) return <SiOpenapiinitiative className={className} {...props} />;
  if (normalized.includes("async")) return <Cpu className={className} {...props} />;

  // AI / ML / Vision
  if (normalized.includes("pytorch")) return <SiPytorch className={className} {...props} />;
  if (normalized.includes("tensorflow")) return <SiTensorflow className={className} {...props} />;
  if (normalized.includes("scikit")) return <SiScikitlearn className={className} {...props} />;
  if (normalized.includes("opencv")) return <SiOpencv className={className} {...props} />;
  if (normalized.includes("numpy")) return <SiNumpy className={className} {...props} />;
  if (normalized.includes("pandas")) return <SiPandas className={className} {...props} />;
  if (normalized.includes("yolo") || normalized.includes("vision")) return <Sparkles className={className} {...props} />;
  if (normalized.includes("gan") || normalized.includes("transformer")) return <Cpu className={className} {...props} />;

  // LLM / Agent / RAG
  if (normalized.includes("langchain")) return <SiLangchain className={className} {...props} />;
  if (normalized.includes("langgraph")) return <Workflow className={className} {...props} />;
  if (normalized.includes("rag") || normalized.includes("lightrag")) return <SiLangchain className={className} {...props} />;
  if (normalized.includes("qdrant") || normalized.includes("vector")) return <SiQdrant className={className} {...props} />;
  if (normalized.includes("faiss")) return <Database className={className} {...props} />;
  if (normalized.includes("chainlit")) return <Bot className={className} {...props} />;
  if (normalized.includes("mcp") || normalized.includes("protocol")) return <Cpu className={className} {...props} />;
  if (normalized.includes("langfuse") || normalized.includes("deepeval")) return <SiOpentelemetry className={className} {...props} />;
  if (normalized.includes("claude") || normalized.includes("anthropic")) return <SiAnthropic className={className} {...props} />;
  if (normalized.includes("antigravity") || normalized.includes("codex") || normalized.includes("agent")) return <Bot className={className} {...props} />;

  // Databases
  if (normalized.includes("postgres")) return <SiPostgresql className={className} {...props} />;
  if (normalized.includes("mysql")) return <SiMysql className={className} {...props} />;
  if (normalized.includes("redis")) return <SiRedis className={className} {...props} />;
  if (normalized.includes("elastic")) return <SiElasticsearch className={className} {...props} />;
  if (normalized.includes("mongo")) return <SiMongodb className={className} {...props} />;

  // DevOps & Cloud
  if (normalized.includes("docker")) return <SiDocker className={className} {...props} />;
  if (normalized.includes("git")) return <SiGit className={className} {...props} />;
  if (normalized.includes("linux")) return <SiLinux className={className} {...props} />;
  if (normalized.includes("aws")) return <FaAws className={className} {...props} />;
  if (normalized.includes("guardrails") || normalized.includes("security")) return <ShieldCheck className={className} {...props} />;

  return <Layers className={className} {...props} />;
}
