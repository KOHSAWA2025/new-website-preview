export type Locale = 'en' | 'ja'

export type NavItem = {
  label: string
  href: string
}

export type UseCase = {
  title: string
  problem: string
  approach: string
  outcome: string
}

export type SystemSubpage = {
  hero: { kicker: string; headline: string; subtext: string }
  overview: { kicker: string; headline: string; body: string }
  capabilities: {
    kicker: string
    headline: string
    blocks: { title: string; subtext: string; bullets: string[] }[]
  }
  layering: {
    kicker: string
    headline: string
    layers: { title: string; subtext: string }[]
  }
  outcome: { kicker: string; headline: string; body: string }
  interactionLayer?: { kicker: string; headline: string; subtext: string; bullets: string[] }
}

export type SiteCopy = {
  ui: {
    brandName: string
    brandTagline: string
    productPlatformName: string
    localeSwitch: {
      en: string
      ja: string
    }
    keyMessageKicker: string
    moduleKicker: string
    philosophyKicker: string
    factsKicker: string
    foundationKicker: string
    statementKicker: string
    caseKicker: string
    useCase: {
      problem: string
      approach: string
      outcome: string
    }
    useCaseNotes: {
      partnerConsent: string
      anonymized: string
    }
    links: {
      publicSystemsCapabilities: string
      backToSystems: string
      viewCapabilities: string
      viewDetails: string
    }
    footer: {
      locations: string
      decisionSystems: string
    }
  }
  nav: {
    items: NavItem[]
    languageLabel: string
  }
  footer: {
    note: string
  }
  home: {
    hero: {
      kicker: string
      headline: string
      subtext: string
      statements: string[]
    }
    platformIntro: {
      kicker: string
      headline: string
      subtext: string
      pillars: { title: string; subtext: string }[]
    }
    mechanismVsPrediction: {
      kicker: string
      headline: string
      left: { title: string; points: string[] }
      right: { title: string; points: string[] }
    }
    systemsStrip: {
      kicker: string
      headline: string
      items: { title: string; subtext: string }[]
    }
    finalCta: {
      headline: string
      subtext: string
      primary: string
      secondary: string
    }
  }
  platform: {
    hero: {
      kicker: string
      headline: string
      subtext: string
    }
    philosophy: {
      kicker: string
      headline: string
      subtext: string
    }
    blocks: { title: string; subtext: string; bullets: string[] }[]
  }
  capabilities: {
    hero: { kicker: string; headline: string; subtext: string }
    items: { title: string; subtext: string; bullets: string[] }[]
  }
  systems: {
    hero: { kicker: string; headline: string; subtext: string }
    items: { title: string; subtext: string; signals: string[] }[]
  }
  systemsSubpages: {
    public: SystemSubpage
    biologicalVirtualCell: SystemSubpage
    security: SystemSubpage
    financial: SystemSubpage
    supply: SystemSubpage
  }
  technology: {
    hero: { kicker: string; headline: string; subtext: string }
    items: { title: string; subtext: string; bullets: string[] }[]
  }
  useCases: {
    hero: { kicker: string; headline: string; subtext: string }
    cases: UseCase[]
  }
  about: {
    hero: { kicker: string; headline: string; subtext: string }
    overview: {
      kicker: string
      headline: string
      companyNameEn: string
      companyNameJa: string
      positioning: string
      facts: { label: string; value: string }[]
      leadership: { label: string; people: { role: string; name: string }[] }
    }
    mission: {
      kicker: string
      headline: string
      statements: string[]
      paragraphs: string[]
    }
    ceoMessage: {
      kicker: string
      headline: string
      title: string
      paragraphs: string[]
      signature: string
    }
    whatWeDo: {
      kicker: string
      headline: string
      subtext: string
      bullets: string[]
    }
  }
}

export const siteCopy: Record<Locale, SiteCopy> = {
  en: {
    ui: {
      brandName: "Os' Lab",
      brandTagline: 'Decision Intelligence',
      productPlatformName: 'Zoooo Platform',
      localeSwitch: {
        en: 'EN',
        ja: 'JP',
      },
      keyMessageKicker: 'KEY MESSAGE',
      moduleKicker: 'MODULE',
      philosophyKicker: 'PHILOSOPHY',
      factsKicker: 'FACTS',
      foundationKicker: 'FOUNDATION',
      statementKicker: 'STATEMENT',
      caseKicker: 'CASE',
      useCase: {
        problem: 'Problem',
        approach: 'Approach',
        outcome: 'Outcome',
      },
      useCaseNotes: {
        partnerConsent: 'This case is published with the consent of the partner.',
        anonymized: 'Client information has been anonymized for confidentiality.',
      },
      links: {
        publicSystemsCapabilities: 'Public Systems Capabilities',
        backToSystems: 'Back to Systems',
        viewCapabilities: 'Explore',
        viewDetails: 'View Details',
      },
      footer: {
        locations: 'Osaka (Headquarters) / Tokyo',
        decisionSystems: 'Decision Systems',
      },
    },
    nav: {
      items: [
        { label: 'Home', href: '/' },
        { label: 'Platform', href: '/platform' },
        { label: 'Capabilities', href: '/capabilities' },
        { label: 'Systems', href: '/systems' },
        { label: 'Technology', href: '/technology' },
        { label: 'Use Cases', href: '/use-cases' },
        { label: 'About', href: '/about' },
      ],
      languageLabel: 'Language',
    },
    footer: {
      note: "Os' Lab. Decision Intelligence Platform company.",
    },
    home: {
      hero: {
        kicker: "DECISION INTELLIGENCE PLATFORM",
        headline: 'From data to decision systems.',
        subtext: 'From prediction to mechanism.',
        statements: [
          'Build decision infrastructure.',
          'Model reality as systems.',
          'Run the future before it arrives.',
        ],
      },
      platformIntro: {
        kicker: 'ZOOOO PLATFORM',
        headline: 'A platform for operational decisions.',
        subtext:
          'Zoooo Platform turns data into executable decision systems—models, simulations, and controls that operate at scale.',
        pillars: [
          {
            title: 'Zoooo Core',
            subtext: 'Unified models. Shared ontology. Durable interfaces.',
          },
          {
            title: 'Zoooo Simulation',
            subtext: 'Counterfactuals. Stress tests. Scenario control.',
          },
          {
            title: 'Zoooo Intelligence',
            subtext: 'Signals to decisions. Human + machine control loops.',
          },
        ],
      },
      mechanismVsPrediction: {
        kicker: 'DIFFERENCE',
        headline: 'Prediction is not a plan.',
        left: {
          title: 'Typical AI',
          points: [
            'Produces forecasts.',
            'Optimizes local metrics.',
            'Breaks under regime change.',
          ],
        },
        right: {
          title: 'Decision Intelligence',
          points: [
            'Builds mechanisms.',
            'Optimizes system outcomes.',
            'Adapts under uncertainty.',
          ],
        },
      },
      systemsStrip: {
        kicker: 'SYSTEMS',
        headline: 'Operate the systems that run the world.',
        items: [
          { title: 'Financial Systems', subtext: 'Risk, allocation, execution.' },
          { title: 'Biological Systems', subtext: 'Dynamics, constraints, intervention.' },
          { title: 'Supply Systems', subtext: 'Flow, resilience, disruption.' },
          { title: 'Public Systems', subtext: 'Policy, response, governance.' },
        ],
      },
      finalCta: {
        headline: 'Deploy Zoooo Platform.',
        subtext: 'Start with one system. Expand to decision infrastructure.',
        primary: 'Explore the Platform',
        secondary: 'View Use Cases',
      },
    },
    platform: {
      hero: {
        kicker: 'PLATFORM',
        headline: 'Zoooo Platform.',
        subtext: 'One platform. One system state. Decisions as mechanisms.',
      },
      philosophy: {
        kicker: 'PHILOSOPHY',
        headline: 'Unify state. Execute decisions.',
        subtext:
          'A single mechanism connecting integration, simulation, and intelligence—built for operational control.',
      },
      blocks: [
        {
          title: 'Zoooo Core',
          subtext: 'Integration and state. Real-time and governed.',
          bullets: [
            'Data integration + normalization',
            'Real-time event processing',
            'Ontology + access control',
          ],
        },
        {
          title: 'Zoooo Simulation',
          subtext: 'Dynamic system modeling and digital twins.',
          bullets: ['Counterfactual scenarios', 'Stress tests', 'Intervention evaluation'],
        },
        {
          title: 'Zoooo Intelligence',
          subtext: 'Prediction and risk—wired into control loops.',
          bullets: ['Forecasting', 'Risk modeling', 'Decision provenance'],
        },
      ],
    },
    capabilities: {
      hero: {
        kicker: 'CAPABILITIES',
        headline: 'Model. Simulate. Optimize. Control.',
        subtext: 'A minimal set of primitives for decision systems.',
      },
      items: [
        {
          title: 'Prediction',
          subtext: 'Signals and regimes, not just accuracy.',
          bullets: ['Forecasting', 'Anomaly detection', 'Regime identification'],
        },
        {
          title: 'Simulation',
          subtext: 'Counterfactual reality at operational speed.',
          bullets: ['Digital twins', 'Scenario libraries', 'Sensitivity analysis'],
        },
        {
          title: 'Optimization',
          subtext: 'System-level outcomes under constraints.',
          bullets: ['Constrained planning', 'Resource allocation', 'Robust optimization'],
        },
        {
          title: 'Mechanism Modeling',
          subtext: 'Causality, structure, and control surfaces.',
          bullets: ['Dynamic systems', 'Causal graphs', 'Intervention design'],
        },
      ],
    },
    systems: {
      hero: {
        kicker: 'SYSTEMS',
        headline: 'Systems, not industries.',
        subtext: 'We build decision infrastructure where dynamics matter.',
      },
      items: [
        {
          title: 'Security Systems',
          subtext: 'Orchestrate safety as a system state across environments. Simulate hazards. Execute response.',
          signals: [
            'Risk detection and early warning from multi-source signals',
            'Real-time monitoring and system integration across sites',
            'Hazard scenario simulation and end-to-end safety optimization',
          ],
        },
        {
          title: 'Financial Systems',
          subtext: 'Model information-driven dynamics across coupled networks. Stress scenarios. Trace decisions.',
          signals: [
            'Network risk and contagion modeling',
            'Scenario-driven allocation under constraints',
            'Decision provenance and auditability',
          ],
        },
        {
          title: 'Biological Systems',
          subtext: 'Reconstruct hidden state in living dynamics. Simulate transitions. Evaluate interventions.',
          signals: [
            'Mechanistic models with uncertainty bounds',
            'Counterfactual intervention simulation',
            'State estimation from sparse observations',
          ],
        },
        {
          title: 'Supply Systems',
          subtext: 'Operate end-to-end flow under constraints. Simulate disruption. Reconfigure the network.',
          signals: [
            'Digital twin of flows and constraints',
            'Stress-tested plans under disruption',
            'System-level optimization across nodes',
          ],
        },
        {
          title: 'Public Systems',
          subtext: 'Model public environments as coupled dynamics. Test interventions. Govern outcomes.',
          signals: [
            'Policy simulation with traceability',
            'Optimization of allocation tradeoffs',
            'Governance-ready decision records',
          ],
        },
      ],
    },

    systemsSubpages: {
      public: {
        hero: {
          kicker: 'SYSTEMS / PUBLIC',
          headline: 'Public Systems Capabilities',
          subtext: 'Modeling, simulating, and orchestrating complex public environments.',
        },
        overview: {
          kicker: 'SYSTEM OVERVIEW',
          headline: 'Public environments are dynamic systems.',
          body: 'Public systems couple policy, resources, infrastructure, and human behavior. They evolve under constraints, feedback, and non-linear interactions. Simulation is required to test interventions, stress stability, and surface second-order effects before deployment.',
        },
        capabilities: {
          kicker: 'CORE CAPABILITIES',
          headline: 'From structure to operating decisions.',
          blocks: [
            {
              title: 'Reality Structuring',
              subtext: 'Transform unstructured inputs into a structured system state.',
              bullets: [
                'Extract entities, relations, and temporal signals from real-world inputs',
                'Maintain dynamic knowledge graphs as a living system map',
                'Continuously update structure as conditions change',
              ],
            },
            {
              title: 'Multi-Agent Simulation',
              subtext: 'Simulate collective behavior at scale under constraints.',
              bullets: [
                'Thousands of autonomous agents with heterogeneous behaviors',
                'Interaction-driven dynamics across policies, incentives, and resources',
                'Emergent outcomes from structure—not fixed assumptions',
              ],
            },
            {
              title: 'Scenario Exploration (What-if Engine)',
              subtext: 'Test interventions before they happen.',
              bullets: [
                'Policy and strategy simulation with explicit constraints',
                'Inject variables and disturbances to probe system stability',
                'Compare multi-path outcomes across time horizons',
              ],
            },
            {
              title: 'Decision Intelligence',
              subtext: 'Turn complex runs into decisions with traceable logic.',
              bullets: [
                'Generate structured briefs from simulations and system state',
                'Extract decision signals from interaction-heavy dynamics',
                'Provide narrative plus structural interpretation for operators',
              ],
            },
            {
              title: 'Temporal Tracking & Learning',
              subtext: 'Systems improve through history, replay, and refinement.',
              bullets: [
                'Archive simulation runs as a time-indexed system record',
                'Recognize patterns across runs, regimes, and interventions',
                'Iteratively refine structure, constraints, and dynamics',
              ],
            },
          ],
        },
        layering: {
          kicker: 'SYSTEM LAYERING',
          headline: 'A layered system for public environments.',
          layers: [
            { title: 'Data layer', subtext: 'Ingest real-world signals and operational records as time-indexed evidence.' },
            { title: 'Structure layer', subtext: 'Encode entities, relations, constraints, and governance as system state.' },
            { title: 'Simulation layer', subtext: 'Run agent and policy dynamics to surface emergent behavior and stability.' },
            { title: 'Decision layer', subtext: 'Translate system outcomes into actions with traceability and rationale.' },
          ],
        },
        outcome: {
          kicker: 'OUTCOME',
          headline: 'Interventions become testable.',
          body: 'Public decisions can be evaluated as mechanisms: alternatives compared, constraints enforced, and consequences tracked over time—before and after execution.',
        },
        interactionLayer: {
          kicker: 'OPTIONAL',
          headline: 'Interaction Layer',
          subtext: 'Operators interrogate state, agents, and logic.',
          bullets: [
            'Query system state and constraints in operational terms',
            'Interact with simulated entities to test operator actions',
            'Inspect internal logic: assumptions, transitions, and provenance',
          ],
        },
      },

      biologicalVirtualCell: {
        hero: {
          kicker: 'SYSTEMS / BIOLOGICAL',
          headline: 'Biological Systems — Virtual Cell',
          subtext: 'Modeling cells as dynamic systems under constraints.',
        },
        overview: {
          kicker: 'SYSTEM OVERVIEW',
          headline: 'Cells compute state through constraints.',
          body: 'Biological systems are not static pathways. They are dynamic state machines shaped by regulation, metabolism, and conservation laws. Signals such as cfRNA are sparse and indirect; simulation is required to reconstruct hidden state, test perturbations, and separate mechanism from correlation.',
        },
        capabilities: {
          kicker: 'CORE CAPABILITIES',
          headline: 'From sparse signals to mechanistic state transitions.',
          blocks: [
            {
              title: 'Cellular State Reconstruction',
              subtext: 'Infer hidden biological state from partial observations.',
              bullets: [
                'Reconstruct latent cellular state from sparse molecular signals',
                'Integrate cfRNA with metabolic dynamics and regulatory constraints',
                'Maintain state continuity across time and conditions',
              ],
            },
            {
              title: 'Dynamic Simulation',
              subtext: 'Simulate state transitions over time under constraints.',
              bullets: [
                'Evolve cellular state in time with explicit transition dynamics',
                'Stress stability under competing constraints and noise',
                'Explore trajectories across regimes, not single-point outputs',
              ],
            },
            {
              title: 'Intervention Modeling',
              subtext: 'Model response to perturbations as controlled dynamics.',
              bullets: [
                'Represent drugs and perturbations as interventions on structure',
                'Compare counterfactual responses across time horizons',
                'Bound uncertainty and failure modes in the response surface',
              ],
            },
            {
              title: 'Mechanism Extraction',
              subtext: 'Identify causal structure behind observed effects.',
              bullets: [
                'Extract causal structure consistent with constraints and dynamics',
                'Trace which mechanisms drive state transitions',
                'Separate stable mechanism from regime-specific artifacts',
              ],
            },
            {
              title: 'Early Signal Detection',
              subtext: 'Detect weak shifts before phenotype changes.',
              bullets: [
                'Surface subtle state drift before macroscopic changes appear',
                'Detect anomalies as deviations in dynamics, not thresholds',
                'Provide early warning signals for intervention timing',
              ],
            },
          ],
        },
        layering: {
          kicker: 'SYSTEM LAYERING',
          headline: 'A layered virtual cell system.',
          layers: [
            { title: 'Data layer', subtext: 'Encode cfRNA and molecular signals as time-indexed observations.' },
            { title: 'Structure layer', subtext: 'Represent regulatory and metabolic constraints as system structure.' },
            { title: 'Simulation layer', subtext: 'Run cellular dynamics to explore trajectories and perturbations.' },
            { title: 'Decision layer', subtext: 'Translate mechanisms into intervention choices with traceability.' },
          ],
        },
        outcome: {
          kicker: 'OUTCOME',
          headline: 'Biology becomes operational.',
          body: 'Interventions can be evaluated as changes to mechanism: state reconstructed, transitions simulated, and responses compared without relying on static pathway assumptions.',
        },
      },

      security: {
        hero: {
          kicker: 'SYSTEMS / SECURITY',
          headline: 'Security Systems',
          subtext: 'System-wide safety orchestration across physical environments.',
        },
        overview: {
          kicker: 'SYSTEM OVERVIEW',
          headline: 'Safety is a system property.',
          body: 'Security environments are distributed and time-varying: sites, sensors, people, and operations interact under constraints. Incidents emerge from weak signals and coupling. Simulation is required to model hazard dynamics, test safeguards, and optimize end-to-end safety rather than local detection.',
        },
        capabilities: {
          kicker: 'CORE CAPABILITIES',
          headline: 'From risk fields to controlled environments.',
          blocks: [
            {
              title: 'Risk Field Modeling',
              subtext: 'Represent environments as dynamic risk landscapes.',
              bullets: [
                'Encode spatial and operational context as a system state',
                'Model risk as evolving fields, not static rules',
                'Track coupling between locations, assets, and behaviors',
              ],
            },
            {
              title: 'Real-Time Monitoring Integration',
              subtext: 'Couple sensing with system state in real time.',
              bullets: [
                'Fuse multi-source signals into a coherent state view',
                'Maintain continuity under sensor gaps and drift',
                'Synchronize state across industrial and residential contexts',
              ],
            },
            {
              title: 'Early Warning & Anomaly Detection',
              subtext: 'Detect weak signals before incidents.',
              bullets: [
                'Identify deviations in dynamics, not isolated events',
                'Trigger early warnings with bounded false escalation',
                'Prioritize actions by system impact and constraint violation',
              ],
            },
            {
              title: 'Scenario Simulation',
              subtext: 'Simulate failures, hazards, and threats.',
              bullets: [
                'Run counterfactual scenarios under operational constraints',
                'Stress-test safeguards and response policies',
                'Compare multi-path outcomes across time horizons',
              ],
            },
            {
              title: 'Hardware Integration Layer',
              subtext: 'Connect with dedicated devices as part of the loop.',
              bullets: [
                'Integrate sensors, IoT, and control systems into system state',
                'Close the loop between detection, simulation, and action',
                'Maintain provenance from physical signals to decisions',
              ],
            },
          ],
        },
        layering: {
          kicker: 'SYSTEM LAYERING',
          headline: 'A layered safety system.',
          layers: [
            { title: 'Data layer', subtext: 'Capture multi-source sensing and operational events as evidence.' },
            { title: 'Structure layer', subtext: 'Encode assets, locations, constraints, and policies as system structure.' },
            { title: 'Simulation layer', subtext: 'Run hazard dynamics and response scenarios before execution.' },
            { title: 'Decision layer', subtext: 'Orchestrate safety actions with traceability and accountability.' },
          ],
        },
        outcome: {
          kicker: 'OUTCOME',
          headline: 'Risk becomes governable.',
          body: 'Safety can be treated as an engineered system: hazards simulated, responses stress-tested, and operations orchestrated across environments—not reduced to surveillance.',
        },
      },

      financial: {
        hero: {
          kicker: 'SYSTEMS / FINANCIAL',
          headline: 'Financial Systems',
          subtext: 'Modeling global information-driven dynamics under constraints.',
        },
        overview: {
          kicker: 'SYSTEM OVERVIEW',
          headline: 'Markets are coupled information systems.',
          body: 'Financial systems evolve through narratives, macro structure, and networked feedback. Signals arrive continuously and shift regimes. Simulation is required to map structure, track narrative dynamics, and explore scenarios—linking global events to local impacts without relying on static assumptions.',
        },
        capabilities: {
          kicker: 'CORE CAPABILITIES',
          headline: 'From global signals to structural scenarios.',
          blocks: [
            {
              title: 'Global Signal Ingestion',
              subtext: 'Continuously absorb events as system inputs.',
              bullets: [
                'Ingest news, reports, and events as time-indexed signals',
                'Normalize heterogeneous sources into a coherent event stream',
                'Maintain provenance from source to system state',
              ],
            },
            {
              title: 'Structure Extraction',
              subtext: 'Identify entities, relations, and macro structure.',
              bullets: [
                'Extract entities and relationships across institutions and themes',
                'Build evolving structural maps of macro coupling',
                'Encode constraints and dependencies as system structure',
              ],
            },
            {
              title: 'Market Narrative Modeling',
              subtext: 'Track narrative dynamics as a changing state.',
              bullets: [
                'Represent narratives as stateful mechanisms, not snapshots',
                'Track sentiment shifts as transitions across regimes',
                'Link narratives to structural constraints and exposures',
              ],
            },
            {
              title: 'Scenario Analysis',
              subtext: 'Explore macro and micro outcomes under perturbations.',
              bullets: [
                'Simulate outcomes under injected shocks and constraints',
                'Compare multi-path trajectories and time horizons',
                'Stress-test stability under regime change',
              ],
            },
            {
              title: 'Local–Global Coupling',
              subtext: 'Link global events to local system impact.',
              bullets: [
                'Propagate global signals through structural dependencies',
                'Model local sensitivity to macro transitions',
                'Surface second-order effects across networks',
              ],
            },
          ],
        },
        layering: {
          kicker: 'SYSTEM LAYERING',
          headline: 'A layered financial dynamics system.',
          layers: [
            { title: 'Data layer', subtext: 'Capture global events and reports as time-indexed signals.' },
            { title: 'Structure layer', subtext: 'Encode entities, relations, exposures, and constraints as state.' },
            { title: 'Simulation layer', subtext: 'Run regime and scenario dynamics under perturbations.' },
            { title: 'Decision layer', subtext: 'Produce traceable structural conclusions for operators.' },
          ],
        },
        outcome: {
          kicker: 'OUTCOME',
          headline: 'Uncertainty becomes explorable.',
          body: 'Global information can be mapped into structure, narratives tracked as dynamics, and scenarios compared as mechanisms—without drifting into execution or advice.',
        },
      },

      supply: {
        hero: {
          kicker: 'SYSTEMS / SUPPLY',
          headline: 'Supply Systems',
          subtext: 'Flow orchestration across physical networks under constraints.',
        },
        overview: {
          kicker: 'SYSTEM OVERVIEW',
          headline: 'Flow is a coupled physical system.',
          body: 'Supply systems are networks of flows constrained by capacity, timing, and disruption. Local optimization can destabilize the whole. Simulation is required to model end-to-end dynamics, explore disruptions, and reconfigure routes and allocations under changing constraints.',
        },
        capabilities: {
          kicker: 'CORE CAPABILITIES',
          headline: 'From flow state to resilient orchestration.',
          blocks: [
            {
              title: 'Flow Modeling',
              subtext: 'Model movement as system dynamics across a network.',
              bullets: [
                'Represent goods, materials, and resources as flowing state',
                'Track timing, queueing, and propagation effects',
                'Maintain network-level visibility rather than local snapshots',
              ],
            },
            {
              title: 'Constraint Mapping',
              subtext: 'Expose bottlenecks and capacity limits as explicit constraints.',
              bullets: [
                'Identify binding constraints across nodes and links',
                'Map capacity limits, lead times, and operational rules',
                'Detect constraint shifts as the system evolves',
              ],
            },
            {
              title: 'Disruption Simulation',
              subtext: 'Simulate delays, failures, and demand shocks.',
              bullets: [
                'Run counterfactual disruptions and stress the network',
                'Quantify cascade effects across time and geography',
                'Compare multi-path recovery trajectories',
              ],
            },
            {
              title: 'Adaptive Routing',
              subtext: 'Reconfigure the network under changing conditions.',
              bullets: [
                'Dynamically re-route flows under constraint violations',
                'Balance stability, cost, and service objectives',
                'Maintain provenance for why routes change',
              ],
            },
            {
              title: 'System-wide Optimization',
              subtext: 'Optimize across the entire network, not locally.',
              bullets: [
                'Coordinate allocations across nodes as one system',
                'Optimize resilience under uncertainty',
                'Turn plans into executable mechanisms',
              ],
            },
          ],
        },
        layering: {
          kicker: 'SYSTEM LAYERING',
          headline: 'A layered flow system.',
          layers: [
            { title: 'Data layer', subtext: 'Capture events, inventory, and movement as a time-indexed record.' },
            { title: 'Structure layer', subtext: 'Encode topology, capacities, and constraints as system structure.' },
            { title: 'Simulation layer', subtext: 'Run flow dynamics under disruption and recovery scenarios.' },
            { title: 'Decision layer', subtext: 'Orchestrate routing and allocation as system actions.' },
          ],
        },
        outcome: {
          kicker: 'OUTCOME',
          headline: 'Flow becomes controllable.',
          body: 'Networks can be operated as systems: constraints made explicit, disruptions rehearsed, and reconfiguration executed without fragmenting into isolated optimizations.',
        },
      },
    },
    technology: {
      hero: {
        kicker: 'TECHNOLOGY',
        headline: 'Mechanisms over heuristics.',
        subtext: 'Engineering foundations for decision intelligence.',
      },
      items: [
        {
          title: 'AI Modeling',
          subtext: 'Prediction that serves decision loops.',
          bullets: ['Time series', 'Graph learning', 'Foundation model integration'],
        },
        {
          title: 'Dynamic Systems',
          subtext: 'State, transitions, and stability.',
          bullets: ['System identification', 'Control surfaces', 'Stochastic dynamics'],
        },
        {
          title: 'Multi-modal Integration',
          subtext: 'Signals from text, sensors, and structured data.',
          bullets: ['RAG + tools', 'Event streams', 'Schema alignment'],
        },
        {
          title: 'Explainability',
          subtext: 'Trace the decision. Audit the mechanism.',
          bullets: ['Attribution', 'Model cards', 'Decision provenance'],
        },
      ],
    },
    useCases: {
      hero: {
        kicker: 'USE CASES',
        headline: 'Decision systems in production.',
        subtext: 'Problem. Approach. Outcome.',
      },
      cases: [
        {
          title: 'Collaboration with Oda Pharmaceutical',
          problem:
            'Functional food development requires evidence-based design. User response is noisy, metabolic impact is indirect, and product decisions are often forced into intuition.',
          approach:
            'Use Zoooo Platform to structure stage-based user feedback and health indicators into an interpretable decision loop. Extract patterns, model metabolic response as system state transitions, and iterate product parameters with mechanism-oriented interpretation.',
          outcome:
            'Product refinements were guided by data rather than anecdotes. A repeatable feedback loop improved alignment with user needs and established a system-driven approach to continuous product improvement.',
        },
        {
          title: 'Supply disruption response',
          problem: 'Volatility breaks static plans.',
          approach: 'Simulate disruptions and re-optimize allocation in loops.',
          outcome: 'Faster response with bounded risk.',
        },
        {
          title: 'Portfolio risk control',
          problem: 'Models fail when regimes change.',
          approach: 'Mechanism modeling with stress-tested scenarios.',
          outcome: 'Decisions that remain stable under uncertainty.',
        },
        {
          title: 'Public resource allocation',
          problem: 'Limited resources, shifting constraints.',
          approach: 'Optimization with policy simulation and audit trails.',
          outcome: 'Transparent allocation with measurable tradeoffs.',
        },
      ],
    },
    about: {
      hero: {
        kicker: 'ABOUT',
        headline: "Os' Lab.",
        subtext: 'Os\' Lab Co., Ltd. Decision Intelligence Platform company.',
      },
      overview: {
        kicker: 'COMPANY OVERVIEW',
        headline: 'Corporate information.',
        companyNameEn: "Os' Lab Co., Ltd.",
        companyNameJa: 'オーズラボ株式会社',
        positioning: 'Decision Intelligence Platform company',
        facts: [
          { label: 'Establishment', value: 'January 2025' },
          {
            label: 'Address',
            value: 'Twin Towers South 17F, 1-13-1 Umeda, Kita-ku, Osaka',
          },
          { label: 'Phone', value: '06-7777-3966 (Main)' },
          { label: 'Email', value: 'contact@oslab.co.jp' },
        ],
        leadership: {
          label: 'Leadership & Advisors',
          people: [
            { role: 'Chairman', name: 'Jin TAKATSUKASA' },
            { role: 'President & CEO', name: 'Kenji OHSAWA' },
          ],
        },
      },
      mission: {
        kicker: 'MISSION / PHILOSOPHY',
        headline: 'Model from constraints. Not correlation.',
        statements: [
          'Compute complex systems. Engineer decisions.',
          'Learn from geometry, conservation, and dynamics.',
          'Treat causality as structure. Build mechanisms.',
        ],
        paragraphs: [
          "Os' Lab builds a Decision Intelligence Platform for complex real-world systems. ZOOOO is our core model foundation: it learns state and mechanism from constraints—geometry, conservation, and dynamics—not from correlation alone.",
        ],
      },
      ceoMessage: {
        kicker: 'MESSAGE FROM THE CEO',
        headline: 'A model must obey structure.',
        title: "New Year’s Message",
        paragraphs: [
          'I have always believed that the true core of causality lies in structure itself. What we call function is simply the result that structure must exhibit under given constraints. In medicine and the life sciences, people often become absorbed in an endless discussion of details. But the real world is simpler—and more unforgiving.',
          'Life computes. Cells integrate signals, conserve what must be conserved, and continuously migrate through state space. If computation itself cannot be avoided, then the real question becomes: do we have a model that can treat this computation as it is—faithfully and honestly?',
          'A model that fails once constraints are broken; a model whose output must change when structure changes; a model that can find and output regularities from pure chaos.',
          "Over the past year, Os' Lab made a genuine leap. Building on the ZOOOO model that we proposed independently, and through deep collaboration with Oda Pharmaceuticals’ PPN technology, we jointly completed the construction of a virtual cell system. This system does not remain at the level of concept or demonstration. It has already concretely participated in and advanced the R&D of multiple new, effective chronic-disease products, and has successfully reached the real world.",
          'To my knowledge, this is among the very few cases in the industry—and arguably the first—in which AI participated as a primary research agent and successfully produced real-world products. This result not only validates our technical path, but also demonstrates that modeling from structure and constraints can hold in the real world.',
          "It is in this context that I have moved from my long-standing role as CTO, responsible for core technology, to assume the position of CEO of Os' Lab. I would like to express my sincere gratitude to Professor Shinichi Matsumoto for his guidance and support, and to the board for recognizing and trusting my past work.",
          "This change in role has also forced me to reconsider a question: what kind of company should Os' Lab become?",
          'We must confront world-class competition, and benchmark ourselves against the most advanced research and engineering organizations in the United States. Only then can we honestly understand our position, rather than remain satisfied with local advantages.',
          'In recent years, discussions about “surpassing SOTA” and “surpassing certain giants” have been everywhere. But we also see clearly that optimizing a model with the goal of meeting metrics is not the same as true intelligence. This conceptual confusion can only slow the overall progress toward AGI.',
          'Therefore, Os\' Lab will not sacrifice long-term and difficult technical ascent for short-term KPIs. AGI is an exploration with an extremely high threshold and an extremely high density of intelligence. It is not a contest of scale, but the result of direction, patience, and choices.',
          'Today, we are finally beginning to truly have tools that learn not “labels,” but “states.”',
          'But we must remain clear-eyed at all times: under this technical direction, Os\' Lab will keep a small team with high intelligence density, and will only bring in core research and engineering talent capable of exploratory development.',
          'In the new year, Os\' Lab will continue to move forward quietly but firmly. Because what truly matters deserves to be completed seriously, slowly, and thoroughly.',
        ],
        signature: 'CEO Kenji OHSAWA',
      },
      whatWeDo: {
        kicker: 'WHAT WE DO',
        headline: 'From model to decision infrastructure.',
        subtext:
          'We operationalize ZOOOO through a unified platform: integration, simulation, and intelligence—built as one system.',
        bullets: [
          'Zoooo Platform (Core / Simulation / Intelligence)',
          'AI + simulation for mechanistic modeling',
          'Decision systems with traceable mechanisms',
        ],
      },
    },
  },
  ja: {
    ui: {
      brandName: 'オーズラボ',
      brandTagline: '意思決定インテリジェンス',
      productPlatformName: 'Zoooo Platform',
      localeSwitch: {
        en: 'EN',
        ja: 'JP',
      },
      keyMessageKicker: '要点',
      moduleKicker: 'モジュール',
      philosophyKicker: '設計思想',
      factsKicker: '基本情報',
      foundationKicker: '基盤',
      statementKicker: '要点',
      caseKicker: '事例',
      useCase: {
        problem: '課題',
        approach: 'アプローチ',
        outcome: '成果',
      },
      useCaseNotes: {
        partnerConsent: '本事例は、協業先の同意を得て公開しております。',
        anonymized: '守秘義務に配慮し、クライアント情報は一部匿名化しております。',
      },
      links: {
        publicSystemsCapabilities: '公共システムの機能',
        backToSystems: 'システムへ戻る',
        viewCapabilities: '詳細',
        viewDetails: '詳細を見る',
      },
      footer: {
        locations: '大阪（本社）/ 東京',
        decisionSystems: '意思決定システム',
      },
    },
    nav: {
      items: [
        { label: 'ホーム', href: '/' },
        { label: 'プラットフォーム', href: '/platform' },
        { label: '機能', href: '/capabilities' },
        { label: 'システム', href: '/systems' },
        { label: '技術', href: '/technology' },
        { label: 'ユースケース', href: '/use-cases' },
        { label: '会社情報', href: '/about' },
      ],
      languageLabel: '言語',
    },
    footer: {
      note: 'オーズラボ株式会社｜意思決定インテリジェンス・プラットフォーム企業',
    },
    home: {
      hero: {
        kicker: '意思決定インテリジェンス基盤',
        headline: 'データから、意思決定システムへ。',
        subtext: '予測から、メカニズムへ。',
        statements: [
          '意思決定のための基盤を構築します。',
          '現実をシステムとしてモデル化します。',
          '将来を先に検証し、運用に反映します。',
        ],
      },
      platformIntro: {
        kicker: 'Zoooo Platform',
        headline: '複雑系の意思決定を支えるプラットフォーム。',
        subtext:
          'Zoooo Platform は、データを実行可能な意思決定システムへ変換します。モデル、シミュレーション、制御を一体のメカニズムとして運用します。',
        pillars: [
          {
            title: 'Zoooo Core',
            subtext: '統合モデル。共有オントロジー。安定したインターフェース。',
          },
          {
            title: 'Zoooo Simulation',
            subtext: '反実仮想。ストレステスト。シナリオ検証。',
          },
          {
            title: 'Zoooo Intelligence',
            subtext: 'シグナルから判断へ。人と機械の制御ループ。',
          },
        ],
      },
      mechanismVsPrediction: {
        kicker: '差異',
        headline: '予測は、計画ではありません。',
        left: {
          title: '一般的なAI',
          points: ['予測を提示する。', '局所的な指標を最適化する。', '環境変化に弱い。'],
        },
        right: {
          title: '意思決定インテリジェンス',
          points: ['メカニズムを構築する。', 'システム全体の成果を最適化する。', '不確実性下でも適応する。'],
        },
      },
      systemsStrip: {
        kicker: 'システム',
        headline: '世界を動かすシステムを設計・運用する。',
        items: [
          { title: '金融システム', subtext: 'リスク、配分、執行。' },
          { title: '生体システム', subtext: 'ダイナミクス、制約、介入。' },
          { title: '供給システム', subtext: 'フロー、レジリエンス、断絶。' },
          { title: '公共システム', subtext: '政策、対応、ガバナンス。' },
        ],
      },
      finalCta: {
        headline: 'Zoooo Platform を展開する。',
        subtext: '一つのシステムから開始し、意思決定基盤へ拡張します。',
        primary: 'プラットフォームを見る',
        secondary: 'ユースケースを見る',
      },
    },
    platform: {
      hero: {
        kicker: 'プラットフォーム',
        headline: 'Zoooo Platform.',
        subtext: '一つのプラットフォーム。一つのシステム状態。意思決定をメカニズムとして実装する。',
      },
      philosophy: {
        kicker: '設計思想',
        headline: '状態を統合し、意思決定を実行する。',
        subtext:
          '統合・シミュレーション・インテリジェンスを一つのメカニズムとして接続し、意思決定の運用に組み込みます。',
      },
      blocks: [
        {
          title: 'Zoooo Core',
          subtext: '統合と状態。リアルタイムと統制。',
          bullets: ['データ統合と正規化', 'リアルタイム処理', 'オントロジーとアクセス制御'],
        },
        {
          title: 'Zoooo Simulation',
          subtext: '動的システムモデルとデジタルツイン。',
          bullets: ['反実仮想シナリオ', 'ストレステスト', '介入評価'],
        },
        {
          title: 'Zoooo Intelligence',
          subtext: '予測とリスクを制御ループへ接続する。',
          bullets: ['予測', 'リスクモデル', '決定のプロベナンス'],
        },
      ],
    },
    capabilities: {
      hero: {
        kicker: '機能',
        headline: 'モデル化。シミュレーション。最適化。制御。',
        subtext: '意思決定システムを構成する最小単位。',
      },
      items: [
        {
          title: '予測',
          subtext: '精度だけではなく、シグナルと状態遷移。',
          bullets: ['予測', '異常検知', 'レジーム識別'],
        },
        {
          title: 'シミュレーション',
          subtext: '運用速度での反実仮想。',
          bullets: ['デジタルツイン', 'シナリオライブラリ', '感度分析'],
        },
        {
          title: '最適化',
          subtext: '制約下でのシステム成果。',
          bullets: ['制約付き計画', '資源配分', 'ロバスト最適化'],
        },
        {
          title: 'メカニズムモデル',
          subtext: '因果、構造、制御面。',
          bullets: ['ダイナミカルシステム', '因果グラフ', '介入設計'],
        },
      ],
    },
    systems: {
      hero: {
        kicker: 'システム',
        headline: '産業ではなく、システム。',
        subtext: 'ダイナミクスが支配する領域に意思決定インフラを構築する。',
      },
      items: [
        {
          title: 'セキュリティシステム',
          subtext:
            '環境横断の安全を、状態として編成する。危険を予行し、対応を実行する。',
          signals: [
            '多様な信号からのリスク検知と早期警戒',
            'リアルタイム監視と現場・設備を横断した統合',
            '故障・危険シナリオのシミュレーションと安全最適化',
          ],
        },
        {
          title: '金融システム',
          subtext: '情報で駆動される結合ダイナミクスを扱う。シナリオで安定性を検証する。',
          signals: [
            'ネットワーク・リスクと連鎖のモデル化',
            '制約下でのシナリオ駆動配分',
            '決定の追跡性と監査性',
          ],
        },
        {
          title: '生体システム',
          subtext: '疎な観測から状態を復元し、遷移を予行し、介入を評価する。',
          signals: ['不確実性境界付きのメカニズムモデル', '反実仮想による介入シミュレーション', '疎な観測からの状態推定'],
        },
        {
          title: '供給システム',
          subtext: '制約下のフローを全体系として運用する。断絶を予行し、再構成する。',
          signals: ['フローと制約のデジタルツイン', '断絶下でのストレステスト計画', 'ノード横断のシステム最適化'],
        },
        {
          title: '公共システム',
          subtext: '公共環境を結合ダイナミクスとして扱う。介入を検証し、帰結を統制する。',
          signals: ['追跡可能な政策シミュレーション', '配分トレードオフの最適化', 'ガバナンスに耐える決定記録'],
        },
      ],
    },

    systemsSubpages: {
      public: {
        hero: {
          kicker: 'システム / 公共',
          headline: '公共システムの機能',
          subtext: '複雑な公共環境をモデル化し、シミュレーションし、編成する。',
        },
        overview: {
          kicker: 'システム概要',
          headline: '公共環境は、動的なシステムです。',
          body: '公共システムは、政策、資源、インフラ、人の行動が相互作用し、制約とフィードバックの下で時々刻々と変化します。介入の影響は二次・三次の効果として顕在化するため、実行前にシミュレーションで検証し、安定性とトレードオフを評価することが不可欠です。',
        },
        capabilities: {
          kicker: '中核機能',
          headline: '構造から、運用可能な判断へ。',
          blocks: [
            {
              title: '現実の構造化',
              subtext: '非構造な入力を、運用可能な「システム状態」へ変換する。',
              bullets: [
                '実世界の入力から、主体・関係・時間的シグナルを抽出する',
                '動的な知識グラフとして、システム地図を維持する',
                '状況変化に応じて、構造を継続的に更新する',
              ],
            },
            {
              title: 'マルチエージェント・シミュレーション',
              subtext: '制約下での集団行動を、スケールさせて再現する。',
              bullets: [
                '多様な行動特性を持つ多数の自律主体を同時に扱う',
                '政策・誘因・資源の相互作用からダイナミクスを生成する',
                '固定の前提ではなく、構造から「創発」を観測する',
              ],
            },
            {
              title: 'シナリオ探索（What-if）',
              subtext: '介入を実施する前に、影響と安定性を検証する。',
              bullets: [
                '制約を明示したうえで、政策・戦略をシミュレートする',
                '変数や外乱を投入し、システムの脆弱性を露出させる',
                '複数の経路と時間軸で、結果を比較する',
              ],
            },
            {
              title: '意思決定インテリジェンス',
              subtext: '複雑な実行結果を、追跡可能な判断へ変換する。',
              bullets: [
                'シミュレーションと状態から、構造化された要約を生成する',
                '相互作用の中から、意思決定に必要な信号を抽出する',
                '運用者のために、説明と構造解釈を併記する',
              ],
            },
            {
              title: '時間追跡と学習',
              subtext: '履歴・再現・改善により、システムは継続的に強化される。',
              bullets: [
                'シミュレーション実行を、時系列の記録として蓄積する',
                '実行間・レジーム間でパターンを抽出する',
                '構造・制約・ダイナミクスを反復的に更新する',
              ],
            },
          ],
        },
        layering: {
          kicker: 'システム階層',
          headline: '公共環境を扱うためのレイヤ構造。',
          layers: [
            { title: 'データ層', subtext: '実世界の信号と運用記録を、時系列の証拠として取り込む。' },
            { title: '構造層', subtext: '主体・関係・制約・ガバナンスを、状態として符号化する。' },
            { title: 'シミュレーション層', subtext: '政策と集団行動のダイナミクスを実行し、創発と安定性を評価する。' },
            { title: '意思決定層', subtext: '結果を運用可能な判断へ変換し、根拠を追跡可能にする。' },
          ],
        },
        outcome: {
          kicker: '成果',
          headline: '介入が「検証可能」になる。',
          body: '公共の意思決定を、メカニズムとして扱えるようになります。代替案を比較し、制約を守り、実行前後で帰結を追跡できます。',
        },
        interactionLayer: {
          kicker: '任意',
          headline: 'インタラクション層',
          subtext: '運用者が状態・主体・論理を直接照会し、検証する。',
          bullets: [
            'システム状態と制約を、運用観点で照会する',
            'シミュレーション主体に介入し、運用行動を検証する',
            '内部論理（前提、遷移、根拠）を追跡可能にする',
          ],
        },
      },

      biologicalVirtualCell: {
        hero: {
          kicker: 'システム / 生体',
          headline: '生体システム：仮想細胞',
          subtext: '細胞を、制約下で動く動的システムとして扱う。',
        },
        overview: {
          kicker: 'システム概要',
          headline: '細胞は、状態を計算します。',
          body: '生体システムは静的な経路図ではなく、制御と代謝が結びついた動的な状態遷移系です。cfRNA などの観測は疎で間接的であり、隠れた状態を復元し、介入の効果を検証し、機構を抽出するにはシミュレーションが不可欠です。',
        },
        capabilities: {
          kicker: '中核機能',
          headline: '疎な信号から、機構と状態遷移へ。',
          blocks: [
            {
              title: '細胞状態の再構成',
              subtext: '部分観測から隠れた状態を推定する。',
              bullets: [
                '疎な分子信号から潜在状態を復元する',
                'cfRNA・代謝ダイナミクス・制御制約を統合する',
                '時間軸上の状態の連続性を保持する',
              ],
            },
            {
              title: '動的シミュレーション',
              subtext: '制約下の状態遷移を時間発展として実行する。',
              bullets: [
                '遷移のダイナミクスを明示したうえで時間発展させる',
                'ノイズと競合制約下での安定性を評価する',
                '単点ではなく軌跡として挙動を比較する',
              ],
            },
            {
              title: '介入モデリング',
              subtext: '摂動を、制御されたダイナミクスとして表現する。',
              bullets: [
                '薬剤・摂動を構造への介入として表現する',
                '反実仮想の応答を時間軸で比較する',
                '不確実性と失敗様式を境界づける',
              ],
            },
            {
              title: '機構抽出',
              subtext: '観測効果の背後にある因果構造を同定する。',
              bullets: [
                '制約とダイナミクスに整合する因果構造を抽出する',
                '状態遷移を駆動する機構を追跡する',
                'レジーム依存の見かけを分離する',
              ],
            },
            {
              title: '早期シグナル検出',
              subtext: '表現型の変化に先行する微細な変化を捉える。',
              bullets: [
                '状態のドリフトを早期に露出させる',
                '閾値ではなくダイナミクスの逸脱として異常を捉える',
                '介入タイミングの判断材料を提供する',
              ],
            },
          ],
        },
        layering: {
          kicker: 'システム階層',
          headline: '仮想細胞を支えるレイヤ構造。',
          layers: [
            { title: 'データ層', subtext: 'cfRNA 等の分子信号を時系列観測として符号化する。' },
            { title: '構造層', subtext: '制御・代謝の制約をシステム構造として表現する。' },
            { title: 'シミュレーション層', subtext: '細胞ダイナミクスを実行し、軌跡と摂動応答を比較する。' },
            { title: '意思決定層', subtext: '機構の差分を、介入選択の根拠として提示する。' },
          ],
        },
        outcome: {
          kicker: '成果',
          headline: '生体が、運用可能になる。',
          body: '静的な説明ではなく、状態と機構として比較・検証できるようになります。再構成、遷移、介入応答を一つの枠組みで扱えます。',
        },
      },

      security: {
        hero: {
          kicker: 'システム / セキュリティ',
          headline: 'セキュリティシステム',
          subtext: '物理環境にまたがる安全を、システムとして編成する。',
        },
        overview: {
          kicker: 'システム概要',
          headline: '安全は、システム特性です。',
          body: 'セキュリティ環境は分散し、時間とともに変化します。現場、設備、センサー、人、運用が結合し、弱い信号と相互作用から事象が創発します。局所の検知ではなく、シミュレーションにより危険の伝播と対策の有効性を検証し、全体最適として安全を設計します。',
        },
        capabilities: {
          kicker: '中核機能',
          headline: 'リスクを「場」として扱い、制御する。',
          blocks: [
            {
              title: 'リスク場のモデリング',
              subtext: '環境を動的なリスク景観として表現する。',
              bullets: [
                '空間・運用文脈をシステム状態として符号化する',
                '固定ルールではなく、時間変化する場として追跡する',
                '拠点・資産・行動の結合をモデル化する',
              ],
            },
            {
              title: 'リアルタイム統合',
              subtext: '観測と状態をリアルタイムで結合する。',
              bullets: [
                '複数の信号を統合し、一つの状態像にまとめる',
                '欠損やドリフトの下でも状態連続性を維持する',
                '産業・住環境の双方で整合する状態を保つ',
              ],
            },
            {
              title: '早期警戒と異常検出',
              subtext: '事故の前段にある弱い変化を捉える。',
              bullets: [
                '単発事象ではなくダイナミクスの逸脱を検知する',
                '誤警報を制御しつつ、早期に警戒を出す',
                '制約違反と影響度で対応優先度を決める',
              ],
            },
            {
              title: 'シナリオ・シミュレーション',
              subtext: '事故・故障・脅威を反実仮想で検証する。',
              bullets: [
                '運用制約下での反実仮想を実行する',
                '対策と対応方針をストレステストする',
                '時間軸・経路別に結果を比較する',
              ],
            },
            {
              title: '機器連携レイヤ',
              subtext: '専用機器を意思決定ループに接続する。',
              bullets: [
                'センサー、IoT、制御系を状態の一部として統合する',
                '検知・検証・実行を一つのループとして閉じる',
                '物理信号から判断までの根拠を追跡可能にする',
              ],
            },
          ],
        },
        layering: {
          kicker: 'システム階層',
          headline: '安全を扱うレイヤ構造。',
          layers: [
            { title: 'データ層', subtext: '観測と運用イベントを証拠として取り込む。' },
            { title: '構造層', subtext: '拠点・資産・制約・方針を構造として表現する。' },
            { title: 'シミュレーション層', subtext: '危険の伝播と対応を事前に検証する。' },
            { title: '意思決定層', subtext: '全体の安全を、追跡可能な判断として編成する。' },
          ],
        },
        outcome: {
          kicker: '成果',
          headline: 'リスクが、統制可能になる。',
          body: '監視ではなく、全体の安全編成として運用できます。危険を予行し、対策を検証し、現場横断で一貫した判断を実行できます。',
        },
      },

      financial: {
        hero: {
          kicker: 'システム / 金融',
          headline: '金融システム',
          subtext: 'グローバル情報によって駆動されるダイナミクスを扱う。',
        },
        overview: {
          kicker: 'システム概要',
          headline: '金融は、情報の結合システムです。',
          body: '金融システムは、ナラティブ、マクロ構造、ネットワークのフィードバックによって進化します。信号は連続的に流入し、レジームが切り替わります。構造を抽出し、ナラティブを動的状態として追跡し、シナリオを比較するにはシミュレーションが必要です。',
        },
        capabilities: {
          kicker: '中核機能',
          headline: 'グローバル信号を、構造とシナリオへ。',
          blocks: [
            {
              title: 'グローバル信号の取り込み',
              subtext: '出来事をシステム入力として連続的に取り込む。',
              bullets: [
                'ニュース、報告書、イベントを時系列信号として取り込む',
                '異種ソースを整合させ、イベント流へ統一する',
                '出所から状態への根拠を保持する',
              ],
            },
            {
              title: '構造抽出',
              subtext: '主体・関係・マクロ構造を同定する。',
              bullets: [
                '主体と関係を抽出し、構造地図を更新する',
                'マクロの結合を、状態として表現する',
                '制約と依存関係を構造に埋め込む',
              ],
            },
            {
              title: '市場ナラティブのモデリング',
              subtext: 'ナラティブを変化する状態として追跡する。',
              bullets: [
                'スナップショットではなく状態遷移として表現する',
                '感応の変化をレジーム遷移として捉える',
                'ナラティブと構造制約を結びつける',
              ],
            },
            {
              title: 'シナリオ解析',
              subtext: '摂動下の帰結を比較する。',
              bullets: [
                'ショック投入と制約下での反実仮想を実行する',
                '時間軸・経路別に軌跡を比較する',
                'レジーム変化下での安定性を評価する',
              ],
            },
            {
              title: 'ローカル–グローバル結合',
              subtext: 'グローバル変化をローカル影響へ伝播させる。',
              bullets: [
                '構造依存を通じて信号を伝播させる',
                'ローカルの感応度を状態として扱う',
                '二次効果をネットワークとして露出させる',
              ],
            },
          ],
        },
        layering: {
          kicker: 'システム階層',
          headline: '金融ダイナミクスを扱うレイヤ構造。',
          layers: [
            { title: 'データ層', subtext: 'グローバル事象を時系列信号として記録する。' },
            { title: '構造層', subtext: '主体・関係・依存・制約を状態として表現する。' },
            { title: 'シミュレーション層', subtext: 'レジームとシナリオのダイナミクスを実行する。' },
            { title: '意思決定層', subtext: '構造に基づく結論を、追跡可能に提示する。' },
          ],
        },
        outcome: {
          kicker: '成果',
          headline: '不確実性が、探索可能になる。',
          body: '情報を構造へ写像し、ナラティブをダイナミクスとして追跡し、シナリオを比較できます。実行や助言ではなく、構造的な理解を提供します。',
        },
      },

      supply: {
        hero: {
          kicker: 'システム / 供給',
          headline: '供給システム',
          subtext: '物理ネットワークのフローを制約下で編成する。',
        },
        overview: {
          kicker: 'システム概要',
          headline: 'フローは、結合した物理システムです。',
          body: '供給システムは、容量・時間・断絶といった制約の下で、ネットワーク全体として振る舞います。局所最適は全体の不安定化を招くことがあります。断絶を予行し、経路と配分を再構成するには、シミュレーションによる全体ダイナミクスの把握が必要です。',
        },
        capabilities: {
          kicker: '中核機能',
          headline: 'フロー状態から、レジリエントな編成へ。',
          blocks: [
            {
              title: 'フローモデリング',
              subtext: '移動をネットワークダイナミクスとして表現する。',
              bullets: [
                '物資・資源を流れる状態として表現する',
                '時間遅れと伝播効果を扱う',
                '局所ではなくネットワーク全体の状態を維持する',
              ],
            },
            {
              title: '制約マッピング',
              subtext: 'ボトルネックを制約として露出させる。',
              bullets: [
                'ノード・リンク横断で拘束条件を同定する',
                '容量、リードタイム、運用規則を構造に埋め込む',
                '制約の変化を状態として追跡する',
              ],
            },
            {
              title: '断絶シミュレーション',
              subtext: '遅延、故障、需要ショックを予行する。',
              bullets: [
                '反実仮想の断絶を実行しネットワークをストレステストする',
                '時間・地理にまたがる連鎖影響を評価する',
                '回復軌跡を複数経路で比較する',
              ],
            },
            {
              title: '適応ルーティング',
              subtext: '変化に応じて経路を再構成する。',
              bullets: [
                '制約違反の下でフローを動的に再配線する',
                '安定性とサービスのトレードオフを扱う',
                '変更理由を追跡可能にする',
              ],
            },
            {
              title: '全体最適化',
              subtext: '局所ではなく全体系として最適化する。',
              bullets: [
                '配分を全体として協調させる',
                '不確実性下のレジリエンスを最適化する',
                '計画を実行可能なメカニズムへ変換する',
              ],
            },
          ],
        },
        layering: {
          kicker: 'システム階層',
          headline: 'フローを扱うレイヤ構造。',
          layers: [
            { title: 'データ層', subtext: '在庫・移動・イベントを時系列記録として保持する。' },
            { title: '構造層', subtext: 'トポロジー、容量、制約を構造として表現する。' },
            { title: 'シミュレーション層', subtext: '断絶と回復のダイナミクスを実行する。' },
            { title: '意思決定層', subtext: '経路と配分をシステム行動として編成する。' },
          ],
        },
        outcome: {
          kicker: '成果',
          headline: 'フローが、制御可能になる。',
          body: '制約を明示し、断絶を予行し、再構成を実行できます。断片的な局所最適ではなく、全体として運用できます。',
        },
      },
    },
    technology: {
      hero: {
        kicker: '技術',
        headline: 'ヒューリスティクスではなく、メカニズム。',
        subtext: '意思決定インテリジェンスの工学基盤。',
      },
      items: [
        {
          title: 'AIモデリング',
          subtext: '意思決定ループに奉仕する予測。',
          bullets: ['時系列', 'グラフ学習', '基盤モデル統合'],
        },
        {
          title: '動的システム',
          subtext: '状態、遷移、安定性。',
          bullets: ['システム同定', '制御面', '確率ダイナミクス'],
        },
        {
          title: 'マルチモーダル統合',
          subtext: 'テキスト・センサー・構造化データの統合。',
          bullets: ['RAG とツール連携', 'イベントストリーム', 'スキーマ整合'],
        },
        {
          title: '説明可能性',
          subtext: '決定を追跡し、メカニズムを監査する。',
          bullets: ['帰属', 'モデルカード', '決定プロベナンス'],
        },
      ],
    },
    useCases: {
      hero: {
        kicker: 'ユースケース',
        headline: '運用に組み込まれた意思決定システム。',
        subtext: '課題 / アプローチ / 成果',
      },
      cases: [
        {
          title: '織田製薬との協業',
          problem:
            '代謝健康のサポートを目的とした食品グレード製品の開発では、設計の根拠が求められます。一方で、利用者の反応はばらつきが大きく、代謝への影響は間接的で把握が難しいため、意思決定が経験則に依存しやすい状況が生じます。',
          approach:
            'Zoooo Platform を用い、日常利用で収集されたユーザーフィードバックと健康関連指標を段階別に整理し、意思決定に耐える形で要約・解釈しました。パターン抽出に加え、代謝応答を「状態の推移」として捉え、構造・制約に基づく見立てを反復的な製品改善に接続しました。',
          outcome:
            '観察データに基づく改善サイクルが確立され、設計の論拠が明確になりました。利用者の健康ニーズとの整合が高まり、直感中心の開発から、システムに基づく継続改善へ移行するための枠組みを整備しました。',
        },
        {
          title: 'サプライ断絶への即応',
          problem: '変動が静的計画を破壊する。',
          approach: '断絶をシミュレーションし、配分をループで再最適化する。',
          outcome: 'リスク境界を保ちながら応答速度を向上。',
        },
        {
          title: 'ポートフォリオのリスク制御',
          problem: 'レジーム変化でモデルが崩れる。',
          approach: 'ストレステスト済みシナリオでメカニズムを設計する。',
          outcome: '不確実性下でも安定する意思決定。',
        },
        {
          title: '公共資源の配分',
          problem: '資源は有限で、制約は変化する。',
          approach: '政策シミュレーションと監査証跡を備えた最適化。',
          outcome: 'トレードオフが測定可能な透明な配分。',
        },
      ],
    },
    about: {
      hero: {
        kicker: '会社情報',
        headline: 'オーズラボ株式会社',
        subtext: '意思決定インテリジェンス・プラットフォーム企業',
      },
      overview: {
        kicker: '会社概要',
        headline: '法人情報',
        companyNameEn: "Os' Lab Co., Ltd.",
        companyNameJa: 'オーズラボ株式会社',
        positioning: '意思決定インテリジェンス・プラットフォーム企業',
        facts: [
          { label: '設立', value: '2025年1月' },
          {
            label: '所在地',
            value: '大阪市北区梅田1－13－1 ツインタワーズ・サウス17階',
          },
          { label: '電話', value: '06-7777-3966（代）' },
          { label: 'メール', value: 'contact@oslab.co.jp' },
        ],
        leadership: {
          label: '役員・顧問',
          people: [
            { role: '取締役会長', name: '鷹司　仁' },
            { role: '取締役社長　CEO', name: '大澤顕治' },
          ],
        },
      },
      mission: {
        kicker: 'ミッション / 設計思想',
        headline: '相関ではなく、制約から学習する。',
        statements: [
          '複雑系を計算し、意思決定を設計する。',
          '幾何・保存則・ダイナミクスに立脚する。',
          '因果の核心を「構造」として扱う。メカニズムを構築する。',
        ],
        paragraphs: [
          'オーズラボ株式会社は、複雑な実世界システムを対象とした意思決定インテリジェンス基盤を構築します。ZOOOO はその中核となるモデル基盤であり、相関ではなく、幾何・保存則・ダイナミクスといった制約から、状態と機構を学習します。',
        ],
      },
      ceoMessage: {
        kicker: 'CEOメッセージ',
        headline: '構造に従うモデルを作る。',
        title: '新年寄語',
        paragraphs: [
          '私は常に、真の因果の核心は構造そのものにあると考えてきました。いわゆる機能とは、構造が所与の制約の下で必然的に呈する結果にすぎません。医療と生命科学の領域では、人はしばしば細部の議論に没入し続けます。しかし現実世界は、より簡潔であり、より苛烈です。',
          '生命は計算しています。細胞は信号を統合し、重要な量を守恒し、状態空間の中を絶えず遷移します。もし「計算」そのものを回避できないのであれば、真の問題は次の一点に収束します。私たちは、この計算をありのままに、誠実に扱えるモデルを持っているのか。',
          '制約を破れば失効するモデル。構造が変われば出力も必然的に変わるモデル。純粋な chaos の中から規則性を見出し、出力できるモデル。',
          '過去一年、os’ lab にとっては真の意味での飛躍でした。私たちが独自に提唱した ZOOOO モデルを基盤とし、織田製薬の PPN 技術と深く協働することで、私たちは共同で仮想細胞体系の構築を完了しました。この体系は、概念や展示の段階に留まりません。すでに複数の新規かつ有効な慢性疾患向け製品の研究開発に実際に参画し推進しており、現実世界へと到達しています。',
          '私の知る限り、これは業界の中でも極めて稀であり、場合によっては初めてと言える、AI が主要な研究主体として関与し、現実の製品を産出することに成功した事例です。この成果は、私たちの技術的な道筋を検証しただけでなく、構造と制約から出発するモデリングが現実世界で成立し得ることを示しました。',
          'こうした背景の下、私は長年中核技術を担ってきた CTO から、os’ lab の CEO に就任しました。ここに、松本慎一先生のご指導とご支援に心より感謝申し上げます。また、これまでの私の仕事を評価し信頼してくださった取締役会にも御礼申し上げます。',
          '役割の変化は、私にひとつの問いを改めて突きつけました。os’ lab は、いったいどのような会社になるべきなのか。',
          '私たちは世界級の競争に真正面から向き合い、米国の最先端の研究・エンジニアリング組織を基準に自らを測らなければなりません。そうして初めて、自分たちの立ち位置を正しく認識でき、局所的な優位に甘んじる自己満足に留まらずに済みます。',
          '近年、「SOTA を超える」「どこかの巨大組織を超える」といった議論が絶えません。しかし私たちは、指標の達成そのものを目的とするモデル最適化は、真の知能と同一ではないことを明確に見ています。こうした概念の混同は、AGI への全体の進行を遅らせるだけです。',
          'したがって os’ lab は、短期の KPI のために、長期で困難な技術登攀を犠牲にはしません。AGI は、極めて高い閾値と、極めて高い知性密度を要する探索です。それは規模の争いではなく、方向性、忍耐、そして選択の結果です。',
          '今ようやく私たちは、「ラベル」ではなく「状態」を学ぶための道具を、本当の意味で持ち始めています。',
          'しかし、常に冷静でいなければなりません。この技術路線に基づき、os’ lab は小規模で高い知性密度のチームを維持し、探索的な開発を担える中核の研究・エンジニアリング人材のみを採用します。',
          '新しい一年、os’ lab は引き続き、低調でありながらも確かな歩みを続けます。なぜなら、本当に重要なことは、真剣に、ゆっくりと、そして徹底的に完成させる価値があるからです。',
        ],
        signature: 'CEO Kenji OHSAWA',
      },
      whatWeDo: {
        kicker: '事業',
        headline: 'モデルを、意思決定インフラへ。',
        subtext:
          'ZOOOO を中核に、統合・シミュレーション・インテリジェンスを一つのシステムとして運用可能にする。',
        bullets: ['Zoooo Platform（Core / Simulation / Intelligence）', 'AI + シミュレーションによるメカニズムモデル', '追跡可能な意思決定システム'],
      },
    },
  },
}
