"use client";

import { cn } from "@/lib/utils";
import { ReactNode } from "react";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

// Base Glass Card
interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

export function Card({ children, className, hover = true }: CardProps) {
  return (
    <div
      className={cn(
        "glass rounded-3xl p-6 transition-all duration-300",
        hover && "hover:-translate-y-1",
        className
      )}
    >
      {children}
    </div>
  );
}

// Hero Card - Main large card
interface HeroCardProps {
  title: string;
  titleHighlight?: string;
  titleEnd?: string;
  subtitle: string;
  className?: string;
}

export function HeroCard({ 
  title, 
  titleHighlight, 
  titleEnd, 
  subtitle, 
  className 
}: HeroCardProps) {
  return (
    <Card className={cn("p-8 md:p-12", className)} hover={false}>
      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 md:mb-6 leading-tight">
        {title}{" "}
        {titleHighlight && (
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white/60 to-white">
            {titleHighlight}
          </span>
        )}{" "}
        {titleEnd}
      </h1>
      <p className="text-base md:text-lg lg:text-xl text-white/60 max-w-2xl leading-relaxed">
        {subtitle}
      </p>
    </Card>
  );
}

// Service Card
interface ServiceCardProps {
  title: string;
  description: string;
  icon?: ReactNode;
  href?: string;
  className?: string;
}

export function ServiceCard({ 
  title, 
  description, 
  icon, 
  href = "/services",
  className 
}: ServiceCardProps) {
  return (
    <Link href={href}>
      <Card className={cn("group h-full flex flex-col justify-between", className)}>
        <div>
          {icon && (
            <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center mb-4 group-hover:bg-white/15 transition-colors">
              {icon}
            </div>
          )}
          <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-white/90 transition-colors">
            {title}
          </h3>
          <p className="text-sm text-white/50 leading-relaxed">
            {description}
          </p>
        </div>
        <div className="mt-4 self-end">
          <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-white/10 transition-all">
            <ArrowUpRight 
              size={18} 
              className="text-white/40 transition-all duration-300 group-hover:text-white group-hover:rotate-45" 
            />
          </div>
        </div>
      </Card>
    </Link>
  );
}

// Principle/Quote Card
interface PrincipleCardProps {
  text: string;
  className?: string;
}

export function PrincipleCard({ text, className }: PrincipleCardProps) {
  return (
    <Card className={cn("flex items-center justify-center text-center p-8", className)}>
      <p className="text-xl md:text-2xl font-medium text-white/80 leading-relaxed">
        "{text}"
      </p>
    </Card>
  );
}

// Stats Card
interface StatsCardProps {
  value: string;
  label: string;
  className?: string;
}

export function StatsCard({ value, label, className }: StatsCardProps) {
  return (
    <Card className={cn("text-center", className)}>
      <div className="text-3xl md:text-4xl font-bold text-white mb-2">
        {value}
      </div>
      <div className="text-sm text-white/50">
        {label}
      </div>
    </Card>
  );
}

// CTA Card
interface CTACardProps {
  title: string;
  subtitle?: string;
  buttonText: string;
  href?: string;
  className?: string;
}

export function CTACard({ 
  title, 
  subtitle, 
  buttonText, 
  href = "/contact",
  className 
}: CTACardProps) {
  return (
    <Card className={cn("text-center p-8 md:p-10", className)}>
      <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
        {title}
      </h3>
      {subtitle && (
        <p className="text-white/50 mb-6 max-w-md mx-auto">
          {subtitle}
        </p>
      )}
      <Link
        href={href}
        className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white text-black font-medium hover:bg-white/90 transition-all duration-300 hover:-translate-y-0.5"
      >
        {buttonText}
        <ArrowUpRight size={18} />
      </Link>
    </Card>
  );
}