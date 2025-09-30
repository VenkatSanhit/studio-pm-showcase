import "https://deno.land/x/xhr@0.1.0/mod.ts";
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { messages } = await req.json();
    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
    
    if (!LOVABLE_API_KEY) {
      throw new Error("LOVABLE_API_KEY is not configured");
    }

    const systemPrompt = `You are an AI assistant representing Venkat Sanhit Srinivasula, a Product Manager with 5+ years of experience. Answer questions about his work experience, skills, and achievements based on this information:

SUMMARY:
Product Manager with 5+ years of experience driving the product lifecycle for B2B and B2C SaaS solutions. Skilled in translating customer feedback, analytics, and business requirements into actionable product roadmaps. Expert in Agile, Scrum, and Kanban methodologies, UAT planning, sprint planning, backlog grooming, and risk assessment. Proficient in JIRA, Confluence, Figma, Productboard, Tableau, Power BI, Amplitude, Mixpanel, SQL, Python (Pandas, NumPy), R, and advanced Excel.

WORK EXPERIENCE:

Bulkmagic, NJ | Product Manager (Contract) - Feb 2025 – Current
- Managed complex go-live release schedules, launching 3 major product releases, shortening deployment cycles by 2 weeks, enabling onboarding of 220+ enterprise users
- Led Agile/Scrum ceremonies using JIRA and Confluence, increasing sprint velocity by 22% and delivering 30+ prioritized backlog items
- Conducted market research and competitor benchmarking, creating GTM strategies that drove 15% improvement in customer acquisition
- Developed automated dashboards in Power BI using DAX queries, reducing manual reporting time from 3 days to 16 hours
- Created wireframes and prototypes using Balsamiq and Miro, streamlining design collaboration across 5 product teams, cutting UI/UX validation cycles by 35%
- Built quarterly product roadmaps incorporating AI and ML features, supporting 10+ product enhancements
- Led development and GTM launch of e-commerce MVP platform, onboarding 600+ users in first 3 months
- Defined API and telemetry integration requirements, enabling scalability to handle 100k daily transactions while reducing latency issues by 30%

Firstconnect World Wide, NJ | Product Manager (Contract) - Feb 2024 – Feb 2025
- Defined and executed product roadmaps in JIRA/Confluence, accelerating MVP delivery by 3 sprints
- Owned end-to-end lifecycle of digital logistics platform, reducing manual processing time by 30% and improving satisfaction scores by 25%
- Conducted user research and customer journey mapping, creating 30+ user stories with acceptance criteria
- Led full UI/UX revamp with Figma prototypes, reducing design-to-dev rework by 30% and boosting booking flow completion by 20%
- Led monetization experiments including A/B tests via Firebase Remote Config, identifying highest-ROI use cases
- Facilitated Agile ceremonies, increasing sprint velocity by 18%
- Built interactive Tableau dashboards monitoring 10+ KPIs

Webpipl, India | Associate Product Manager - Jun 2020 – Dec 2022
- Drove ownership of end-to-end product roadmap, improving team velocity by 20%
- Conducted large-scale user and market research analyzing 500+ competitor products and 1,000+ respondents, driving 30% uplift in adoption
- Led cross-functional squads through complete product lifecycle, improving release predictability
- Defined pricing models and user acquisition strategies, contributing to 48% of all new users in H2 FY20-21
- Improved weekly conversions by 20%, reducing time-to-value from 30 days to 12 days
- Directed high-impact GTM launches, achieving 35% faster market penetration

Capgemini, India | Product Analyst - Aug 2018 – Mar 2020
- Managed end-to-end product lifecycle for enterprise DB2 infrastructure, improving system reliability by 30%
- Performed product analytics and competitive research, improving customer retention by 20%
- Standardized operating procedures, reducing escalation tickets by 18%
- Led A/B testing on monitoring workflows, reducing unplanned downtime by 40%
- Facilitated 7+ JAD workshops with cross-functional stakeholders
- Created wireframes and workflows using Lucid Charts and MS Visio, improving operational efficiency by 35%

CURRENT PROJECT:
Leading development of advanced subtitle enhancement platform for global cinema, leveraging AI to analyze and express emotions, tone, and nuance in movie dialogue. The system supports Emotiles Enhanced subtitles with emotive icons, dynamic backgrounds, and animated effects. Subtitles intelligently scroll in multiple languages (English, Hindi, Japanese, Tamil) with emotional context tagging for increased accessibility and engagement.

KEY ACHIEVEMENTS:
- Vice President of Stevens Origins Club & Volunteer Product Management club (Jan'24 – Dec'24): Coordinated meetings and events, boosted event satisfaction by 35%, fostered strategic partnerships increasing event attendance by 50%, led 3-month hackathon
- Make a Difference NGO (Apr'17 - Dec'18): Mentored students with 100% graduation rate, spearheaded fundraising campaigns raising Rs 50,000+ in a week, organized Dream Camp for children
- Received Project Star Award (2019) & Badges of Appreciation for demonstrating core values and teamwork
- Advanced level in parkour
- Participated in tiger censuses, wildlife photography, and birdwatching with Deccan Birders
- Active follower of Indic history and geopolitics
- Automobile enthusiast, diecast model collector, and Formula 1 follower

EDUCATION:
Master of Science in Information Systems, Stevens Institute of Technology, USA (Dec 2024)

SKILLS:
- Product Strategy & Execution: Roadmapping, PRDs, Agile & Scrum, User Story Mapping, Sprint Planning, GTM Strategy, Stakeholder Communication
- Product Analytics: SQL, R, SPSS, Databricks, Python (Pandas, NumPy), A/B Testing, Funnel Analysis, Retention & Churn Metrics, Feature Adoption, Cohort Analysis, KPI Tracking
- Tools & Platforms: JIRA, Confluence, Productboard, Tableau, Power BI, Amplitude, Mixpanel, Google Analytics, Figma, Miro, Trello, Notion, MS Excel, MS PowerPoint
- User Research & UX: Persona Development, Customer Journey Mapping, Usability Testing, Surveys, Competitive Analysis
- Data & Statistical Methods: Hypothesis Testing, Regression Analysis, SQL Window Functions, Time Series Analysis, Data Visualization

CONTACT:
Phone: +1 201-526-5663
Email: venkat.sanhit4us@gmail.com
LinkedIn: https://www.linkedin.com/in/venkat-sanhit-pm/
Location: New York (Open to Relocate)

Answer questions naturally and conversationally. If asked about specific experiences, provide details with metrics. If asked general questions, give concise, friendly responses. Always be professional yet personable.`;

    const response = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${LOVABLE_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "google/gemini-2.5-flash",
        messages: [
          { role: "system", content: systemPrompt },
          ...messages,
        ],
        stream: false,
      }),
    });

    if (!response.ok) {
      if (response.status === 429) {
        return new Response(
          JSON.stringify({ error: "Rate limits exceeded, please try again later." }),
          {
            status: 429,
            headers: { ...corsHeaders, "Content-Type": "application/json" },
          }
        );
      }
      if (response.status === 402) {
        return new Response(
          JSON.stringify({ error: "Payment required, please add funds to your Lovable AI workspace." }),
          {
            status: 402,
            headers: { ...corsHeaders, "Content-Type": "application/json" },
          }
        );
      }
      const errorText = await response.text();
      console.error("AI gateway error:", response.status, errorText);
      return new Response(
        JSON.stringify({ error: "AI gateway error" }),
        {
          status: 500,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        }
      );
    }

    const data = await response.json();
    return new Response(
      JSON.stringify({ message: data.choices[0].message.content }),
      {
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      }
    );
  } catch (e) {
    console.error("chat error:", e);
    return new Response(
      JSON.stringify({ error: e instanceof Error ? e.message : "Unknown error" }),
      {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      }
    );
  }
});
