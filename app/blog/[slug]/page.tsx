"use client"

import { motion } from "motion/react"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import { use } from "react"

// Sample blog data
const blogPosts: Record<string, { title: string; content: string; date: string }> = {
  chatdnd: {
    title: "Building a Multi-Agent Dungeon Master",
    date: "January 2024",
    content: `I wanted to see if AI could handle the chaos of D&D rules and storytelling in real-time.

**The Challenge**

D&D isn't just about following rules—it's about creating a narrative that responds dynamically to player choices while maintaining consistency with the game's complex rule system. Traditional single-agent LLMs struggle with this because they need to simultaneously manage storytelling, rule enforcement, world state, and player interaction.

**Enter LangGraph**

LangGraph's multi-agent architecture was the perfect solution. I designed a system with specialized agents:

- **Dungeon Master Agent**: Handles storytelling and narrative flow
- **Rules Agent**: Validates actions against D&D 5e rules
- **World State Agent**: Maintains consistency of locations, NPCs, and inventory
- **Combat Manager**: Handles initiative, damage calculation, and battle mechanics

**Real-Time Communication**

Using WebSockets and MongoDB, the system maintains persistent game state across sessions. Players can disconnect and reconnect without losing progress, and the AI maintains full context of their adventure.

**What I Learned**

The biggest challenge wasn't the AI—it was managing the coordination between agents to ensure smooth, natural storytelling while maintaining rule accuracy. LangGraph's message passing system was crucial for this.`,
  },
  "bayesian-portfolio": {
    title: "Bayesian Portfolio Optimization with LSTMs",
    date: "March 2024",
    content: `Stock prediction is notoriously difficult, but I wanted to explore if Bayesian methods could add robustness to neural network forecasting.

**The Problem**

Traditional LSTM models for stock prediction often provide point estimates without capturing uncertainty. In finance, understanding confidence intervals is just as important as the prediction itself.

**My Approach**

I combined LSTM neural networks with Bayesian inference to generate probability distributions of future stock prices rather than single-point predictions. This allows for:

- Better risk assessment
- Confidence intervals on predictions
- Portfolio optimization under uncertainty

**Data Pipeline**

Using Alpha Vantage's API, I pulled historical data for multiple stocks and trained ensemble models. The Bayesian layer samples from the posterior distribution to generate multiple possible futures.

**Results**

While no model can consistently beat the market, the Bayesian approach provided valuable uncertainty estimates that traditional models miss. This makes it much more practical for real portfolio management.`,
  },
  "distributed-storage": {
    title: "Building a Linearized File System in C++",
    date: "November 2023",
    content: `Systems programming in C++ taught me more about concurrency and consistency guarantees than any theory class ever could.

**The Goal**

Build a distributed file system that guarantees linearizability—every operation appears to happen atomically at some point between its invocation and response, even in a concurrent environment.

**Key Challenges**

1. **Concurrency Control**: Multiple threads reading and writing simultaneously
2. **Consistency**: Ensuring all clients see a consistent view of the file system
3. **Performance**: Minimizing lock contention while maintaining correctness

**Implementation**

I used a combination of:
- Reader-writer locks for concurrent access
- Vector clocks for ordering operations
- Two-phase commit protocol for distributed transactions

**What I Learned**

The hardest part wasn't writing the code—it was testing it. Concurrency bugs are notoriously difficult to reproduce. I built custom testing harnesses that could simulate thousands of concurrent operations to flush out race conditions.

This project fundamentally changed how I think about distributed systems and the trade-offs between consistency, availability, and partition tolerance.`,
  },
}

export default function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params)
  const post = blogPosts[slug] || {
    title: "Post Not Found",
    date: "",
    content: "This blog post doesn't exist yet.",
  }

  return (
    <main className="relative min-h-screen text-white px-6 py-24">
      <div className="max-w-2xl mx-auto">
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 text-neutral-400 hover:text-[#42B0D5] transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Projects
        </Link>

        <motion.article initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <h1 className="font-fraunces text-5xl md:text-6xl font-bold mb-4 text-balance tracking-tight">
            {post.title}
          </h1>
          <p className="text-neutral-400 mb-8 font-geist">{post.date}</p>

          <div className="prose prose-invert prose-lg max-w-none font-geist">
            {post.content.split("\n\n").map((paragraph, index) => {
              if (paragraph.startsWith("**") && paragraph.endsWith("**")) {
                return (
                  <h2 key={index} className="font-fraunces text-2xl font-bold mt-8 mb-4">
                    {paragraph.replace(/\*\*/g, "")}
                  </h2>
                )
              }
              return (
                <p key={index} className="mb-6 leading-relaxed text-neutral-300">
                  {paragraph}
                </p>
              )
            })}
          </div>
        </motion.article>
      </div>
    </main>
  )
}
