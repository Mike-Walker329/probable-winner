export const platformData = {
  platform: {
    name: "Home Service AI Integration Learning Platform",
    version: "1.0",
    description: "Interactive learning and ideation platform for AI automation in home services",
  },
  trades: ["hvac", "plumbing", "electrical", "roofing", "painting", "pest control", "handyman", "flooring", "appliance repair", "garage door", "cleaning", "landscaping"],
  painPoints: [
    {
      id: "PP001",
      trade: "plumbing",
      title: "Missed and Dropped Calls",
      description:
        "Calls come in during peak hours and techs are in the field. Customers reach voicemail and call competitors.",
      rootCause:
        "No receptionist or call screening system. Calls go unanswered or customers hang up after waiting.",
      businessImpact: {
        leadLoss: "15-25% of inbound calls are lost daily",
        revenue: "Average call value $500–2,000 per job",
        timeWaste: "Callbacks take 2–4 hours of admin time",
      },
      currentTools: ["Basic phone line", "Voicemail", "Manual callback lists in spreadsheet"],
      solutions: [
        {
          solutionId: "SOL001A",
          name: "AI Voicemail to SMS Agent",
          description:
            "Incoming calls trigger AI voicemail transcription. Customer receives instant SMS with next available appointment slots.",
          aiTechnologies: [
            "Speech-to-text (Whisper)",
            "LLM intent extraction (Claude/GPT-4)",
            "SMS delivery (Twilio)",
          ],
          workflow: {
            steps: [
              { node: 1, action: "Incoming call triggers webhook", input: "Phone number, caller ID" },
              { node: 2, action: "AI transcribes voicemail", input: "Audio file" },
              { node: 3, action: "LLM extracts service type and urgency", input: "Transcribed text" },
              { node: 4, action: "Query available technician slots", input: "Service type, urgency level" },
              { node: 5, action: "Send SMS with appointment options", input: "Customer phone, available slots" },
              { node: 6, action: "Log interaction to Google Sheets", input: "Call details, service request, outcome" },
            ],
            dataFlow: "Phone → Webhook → Whisper API → Claude LLM → Availability Check → Twilio SMS → Google Sheets",
          },
          implementationComplexity: "Medium",
          timeToValue: "1–2 weeks",
          roi: {
            recoveredLeads: "Recover 20% of dropped calls = 6–8 jobs/month",
            jobValue: "$500–2,000 per job",
            monthlyRevenue: "$3,000–16,000",
            implementationCost: "$500–1,500",
            monthlyROI: "200–1,000%",
          },
        },
        {
          solutionId: "SOL001B",
          name: "AI Call Screening and Live Transfer Agent",
          description:
            "AI answers calls in real time, qualifies the customer, and transfers to available tech or schedules callback.",
          aiTechnologies: [
            "Voice AI (ElevenLabs or similar)",
            "Real-time speech recognition",
            "Call routing logic",
          ],
          workflow: {
            steps: [
              { node: 1, action: "Incoming call answered by AI agent", input: "Caller phone number" },
              { node: 2, action: "AI greets and gathers service need", input: "Voice input from caller" },
              { node: 3, action: "LLM evaluates urgency and service type", input: "Conversation context" },
              { node: 4, action: "Check tech availability in real time", input: "Current dispatch board state" },
              { node: 5, action: "Transfer to available tech or schedule", input: "Availability status" },
              { node: 6, action: "Log call to CRM with auto-populated details", input: "Call transcript and decision" },
            ],
            dataFlow: "Call → Voice AI → LLM Analysis → Dispatch Check → Transfer/Schedule → CRM Log",
          },
          implementationComplexity: "High",
          timeToValue: "3–4 weeks",
          roi: {
            answeredCalls: "Handle 100% of inbound calls",
            jobValue: "$500–2,000 per job",
            monthlyRevenue: "$4,000–20,000",
            implementationCost: "$2,000–5,000",
            monthlyROI: "100–500%",
          },
        },
        {
          solutionId: "SOL001C",
          name: "Missed Call Text-Back Campaign",
          description:
            "When a call is missed, automated SMS goes out within 2 minutes with booking link and urgent appointment availability.",
          aiTechnologies: [
            "Missed call detection",
            "SMS delivery (Twilio)",
            "Booking link generation",
          ],
          workflow: {
            steps: [
              { node: 1, action: "Detect missed call event", input: "PBX system or phone API" },
              { node: 2, action: "Wait 30 seconds to ensure call is truly missed", input: "Call completion status" },
              { node: 3, action: "Compose personalized SMS", input: "Business name, next available slot" },
              { node: 4, action: "Send SMS with booking link", input: "Caller phone number" },
              { node: 5, action: "Log to Google Sheets for tracking", input: "Phone, timestamp, status" },
            ],
            dataFlow: "Missed Call → Detection → SMS Composition → Twilio Send → Google Sheets",
          },
          implementationComplexity: "Low",
          timeToValue: "1 week",
          roi: {
            recoveredLeads: "Convert 10–15% of missed calls",
            jobValue: "$500–2,000 per job",
            monthlyRevenue: "$1,500–6,000",
            implementationCost: "$300–800",
            monthlyROI: "300–1,500%",
          },
        },
      ],
    },
    {
      id: "PP002",
      trade: "plumbing",
      title: "Low Estimate-to-Job Conversion Rate",
      description:
        "Estimates are sent but customers don't follow up or forget about them. No automated reminder or urgency trigger.",
      rootCause:
        "Estimates sit in email. No follow-up system. Customer forgets or gets quote from competitor first.",
      businessImpact: {
        conversionLoss: "30–40% of estimates never convert",
        revenue: "Average estimate value $800–3,000",
        timeWaste: "Manual follow-up calls consume 3–5 hours per week",
      },
      currentTools: ["Email sent to customer", "Spreadsheet tracking", "Manual phone follow-ups"],
      solutions: [
        {
          solutionId: "SOL002A",
          name: "Automated Multi-Channel Estimate Follow-Up Sequence",
          description:
            "Estimate sent via email. Day 2 sends SMS reminder. Day 4 sends personalized AI email. Day 6 sends final urgency SMS.",
          aiTechnologies: [
            "Workflow automation (n8n)",
            "SMS delivery (Twilio)",
            "Email personalization (GPT-4)",
          ],
          workflow: {
            steps: [
              { node: 1, action: "Estimate created and sent", input: "Customer email, estimate PDF" },
              { node: 2, action: "Log estimate to tracking sheet", input: "Customer details, estimate amount, date sent" },
              { node: 3, action: "Day 2: Send SMS reminder", input: "Customer phone, estimate details" },
              { node: 4, action: "Day 4: Generate personalized follow-up email", input: "Customer name, service type, estimate amount" },
              { node: 5, action: "Day 6: Send urgency SMS with limited-time offer", input: "Customer phone, discount or deadline" },
              { node: 6, action: "Log responses and conversions", input: "Customer action, conversion yes/no" },
            ],
            dataFlow: "Estimate → Tracking Sheet → SMS Reminder → Email → SMS Urgency → Conversion Log",
          },
          implementationComplexity: "Medium",
          timeToValue: "2 weeks",
          roi: {
            conversionLift: "Increase conversion by 15–20%",
            jobValue: "$800–3,000 per job",
            estimatesPerMonth: 40,
            liftedJobs: "6–8 jobs/month",
            monthlyRevenue: "$4,800–24,000",
            implementationCost: "$1,000–2,000",
            monthlyROI: "150–2,000%",
          },
        },
        {
          solutionId: "SOL002B",
          name: "AI Objection Handling and Estimate Revision System",
          description:
            "When customer views estimate but doesn't book, AI sends SMS asking reason and offers options: lower price, payment plan, or callback.",
          aiTechnologies: [
            "Estimate view tracking",
            "LLM objection response",
            "Dynamic offer generation",
          ],
          workflow: {
            steps: [
              { node: 1, action: "Customer opens estimate link", input: "Tracking pixel or link event" },
              { node: 2, action: "Wait 3 hours for booking", input: "Booking status check" },
              { node: 3, action: "If no booking, send SMS inquiry", input: "Customer phone" },
              { node: 4, action: "LLM analyzes response and generates counter-offer", input: "Customer objection text" },
              { node: 5, action: "Send personalized offer (discount, payment plan, or callback)", input: "Generated offer based on objection" },
              { node: 6, action: "Track response and log outcome", input: "Customer interaction and conversion" },
            ],
            dataFlow: "Estimate View → Booking Check → SMS Inquiry → Objection Analysis → Counter-offer → Conversion Log",
          },
          implementationComplexity: "High",
          timeToValue: "3 weeks",
          roi: {
            recoveredEstimates: "Recover 10–15% of viewed-but-not-booked estimates",
            jobValue: "$800–3,000 per job",
            monthlyRevenue: "$2,400–13,500",
            implementationCost: "$2,000–3,500",
            monthlyROI: "70–575%",
          },
        },
      ],
    },
    {
      id: "PP003",
      trade: "plumbing",
      title: "Technician Scheduling and Route Optimization",
      description:
        "Dispatchers manually plan routes. Inefficient travel time, overlapping jobs, poor geolocation awareness.",
      rootCause:
        "Manual spreadsheet-based dispatch. No real-time GPS integration. Dispatchers guess at optimal routing.",
      businessImpact: {
        wasted: "2–3 hours of drive time per tech per day",
        lost: "Could fit 1–2 additional jobs per tech daily with better routes",
        fuel: "$200–400/month in wasted fuel per vehicle",
      },
      currentTools: ["Google Maps for manual routing", "Spreadsheet dispatch board", "Phone calls to techs"],
      solutions: [
        {
          solutionId: "SOL003A",
          name: "Real-Time GPS Optimization with AI Dispatch Agent",
          description:
            "Every tech has GPS tracking. When new job comes in, AI suggests optimal insertion point in tech's current route.",
          aiTechnologies: [
            "GPS tracking (real-time)",
            "Route optimization engine",
            "LLM dispatch logic",
          ],
          workflow: {
            steps: [
              { node: 1, action: "New job booked in system", input: "Job address, time window, tech assignment" },
              { node: 2, action: "Pull all active techs' current locations", input: "GPS coordinates for each tech" },
              { node: 3, action: "Calculate optimal insertion into each tech's route", input: "Job location, tech routes, drive times" },
              { node: 4, action: "LLM evaluates best assignment based on ETA and service window", input: "Optimized routes and timing" },
              { node: 5, action: "Push updated route and directions to tech's mobile app", input: "New job, updated route, directions" },
              { node: 6, action: "Log dispatch decision and ETA to tracking sheet", input: "Job, tech, ETA, route efficiency metric" },
            ],
            dataFlow: "New Job → GPS Locations → Route Optimization → LLM Assignment → Mobile App Push → Tracking Log",
          },
          implementationComplexity: "High",
          timeToValue: "4–6 weeks",
          roi: {
            timeReduction: "Save 1–2 hours drive time per tech daily",
            additionalJobs: "Fit 1–2 more jobs per tech per day",
            jobValue: "$300–800 per job",
            techs: 5,
            monthlyRevenue: "$3,000–24,000",
            implementationCost: "$3,000–6,000",
            monthlyROI: "50–700%",
          },
        },
        {
          solutionId: "SOL003B",
          name: "Predictive Job Duration Estimation",
          description:
            "AI learns historical job durations by service type and complexity. Uses this to predict realistic timelines for new jobs, eliminating scheduling gaps and overtime.",
          aiTechnologies: [
            "Historical data analysis",
            "ML model training",
            "Job type classification",
          ],
          workflow: {
            steps: [
              { node: 1, action: "Collect historical job data", input: "Service type, complexity, actual duration, date" },
              { node: 2, action: "Train ML model on job durations", input: "Historical dataset" },
              { node: 3, action: "New job created with service type and details", input: "Job form data" },
              { node: 4, action: "Model predicts expected duration", input: "Service type, property info, complexity rating" },
              { node: 5, action: "Schedule slot created with accurate buffer time", input: "Predicted duration, tech availability" },
              { node: 6, action: "Compare prediction vs actual to refine model", input: "Actual job completion time" },
            ],
            dataFlow: "Historical Data → ML Training → New Job Input → Duration Prediction → Scheduling → Model Refinement",
          },
          implementationComplexity: "Medium",
          timeToValue: "3–4 weeks",
          roi: {
            schedulingAccuracy: "Reduce scheduling gaps by 40%",
            additionalJobs: "Fit 0.5–1 more jobs per tech per day",
            jobValue: "$300–800 per job",
            monthlyRevenue: "$1,500–8,000",
            implementationCost: "$1,500–3,000",
            monthlyROI: "50–400%",
          },
        },
      ],
    },
    {
      id: "PP004",
      trade: "electrical",
      title: "Permit and Code Compliance Delays",
      description:
        "Electrical jobs are delayed waiting for permits or because techs aren't sure which code applies. Jobs stall mid-project.",
      rootCause:
        "No centralized compliance reference. Techs rely on memory or senior staff for code lookups. Permit tracking is manual.",
      businessImpact: {
        delays: "3–7 day delays per job awaiting permit approval",
        revenue: "Each delayed job costs $1,000–5,000 in cash-flow lag",
        liability: "Code violations risk fines and license suspension",
      },
      currentTools: ["Paper code books", "Municipal websites", "Manual permit applications"],
      solutions: [
        {
          solutionId: "SOL004A",
          name: "AI Code and Permit Lookup Assistant",
          description:
            "Tech types in job type and location. AI pulls applicable NEC sections, local amendments, and permit requirements in seconds.",
          aiTechnologies: [
            "RAG over NEC and local code documents",
            "LLM Q&A (Claude)",
            "Permit database integration",
          ],
          workflow: {
            steps: [
              { node: 1, action: "Tech enters job type and jurisdiction", input: "Service type, city/county" },
              { node: 2, action: "RAG retrieves relevant code sections", input: "NEC chapters, local amendments" },
              { node: 3, action: "LLM summarizes requirements in plain language", input: "Code text, job context" },
              { node: 4, action: "Pull permit requirements for that jurisdiction", input: "Location, job category" },
              { node: 5, action: "Generate permit checklist and pre-fill form fields", input: "Permit template, job details" },
              { node: 6, action: "Track permit status and notify tech on approval", input: "Permit ID, status updates" },
            ],
            dataFlow: "Job Details → Code RAG → LLM Summary → Permit DB → Checklist → Status Tracking",
          },
          implementationComplexity: "High",
          timeToValue: "4–6 weeks",
          roi: {
            timeReduction: "Eliminate 1–2 days of research per job",
            jobsPerMonth: 20,
            delayReduction: "Cut permit prep time by 70%",
            monthlyRevenue: "$5,000–20,000 recovered from faster job completion",
            implementationCost: "$3,000–6,000",
            monthlyROI: "80–450%",
          },
        },
        {
          solutionId: "SOL004B",
          name: "Automated Permit Status Tracker",
          description:
            "Scrapes or polls the local permit portal and sends daily SMS updates to the job owner until permit is approved.",
          aiTechnologies: [
            "Web scraping / API polling",
            "SMS notifications (Twilio)",
            "Status change detection",
          ],
          workflow: {
            steps: [
              { node: 1, action: "Permit submitted and ID logged", input: "Permit number, jurisdiction portal URL" },
              { node: 2, action: "Daily polling checks permit status page", input: "Permit portal" },
              { node: 3, action: "Detect status change (pending → approved/rejected)", input: "Page diff or API response" },
              { node: 4, action: "Send SMS alert to tech and office", input: "Status update, permit ID" },
              { node: 5, action: "Log status history and expected approval timeline", input: "Date, status, municipality avg" },
            ],
            dataFlow: "Permit ID → Portal Poll → Status Check → SMS Alert → Status Log",
          },
          implementationComplexity: "Low",
          timeToValue: "1 week",
          roi: {
            timeSaved: "Save 30 min/day of manual portal checking",
            fasterResponse: "Catch approval same day vs 2–3 day delay",
            monthlyRevenue: "$2,000–8,000 in faster job starts",
            implementationCost: "$300–600",
            monthlyROI: "300–1,200%",
          },
        },
      ],
    },
    {
      id: "PP005",
      trade: "cleaning",
      title: "Last-Minute Cancellations and No-Shows",
      description:
        "Cleaning crews show up and client isn't home or cancels same day. Lost revenue, wasted labor and drive time.",
      rootCause:
        "No automated reminder sequence. Customers forget or cancel without enough notice for rebooking.",
      businessImpact: {
        cancellations: "10–20% of bookings cancel within 24 hours",
        revenue: "Average cleaning job $150–350",
        laborWaste: "2–3 hours of crew time wasted per no-show",
      },
      currentTools: ["Manual phone call reminders", "Email confirmations", "Paper schedule"],
      solutions: [
        {
          solutionId: "SOL005A",
          name: "Multi-Touch Reminder and Confirmation Sequence",
          description:
            "48-hour SMS reminder, 24-hour email confirmation request, 2-hour final SMS. Non-confirmed slots automatically opened for rebooking.",
          aiTechnologies: [
            "Workflow automation (n8n/Zapier)",
            "SMS (Twilio)",
            "Email automation",
          ],
          workflow: {
            steps: [
              { node: 1, action: "Booking created in scheduling system", input: "Customer, date, time, address" },
              { node: 2, action: "48h before: Send SMS reminder", input: "Customer phone, appointment details" },
              { node: 3, action: "24h before: Request email confirmation", input: "Customer email, confirm/cancel links" },
              { node: 4, action: "2h before: Send final SMS with crew ETA", input: "Customer phone, crew name" },
              { node: 5, action: "If no confirmation by 12h mark, open slot for rebooking", input: "Booking status, waitlist" },
              { node: 6, action: "Log outcome (confirmed, cancelled, no-show)", input: "Appointment result" },
            ],
            dataFlow: "Booking → 48h SMS → 24h Email Confirm → 2h SMS → Rebook if Unconfirmed → Log Outcome",
          },
          implementationComplexity: "Low",
          timeToValue: "1 week",
          roi: {
            cancellationReduction: "Reduce cancellations by 40–60%",
            jobValue: "$150–350 per cleaning",
            savedJobs: "4–8 jobs saved per month",
            monthlyRevenue: "$600–2,800",
            implementationCost: "$200–500",
            monthlyROI: "120–1,300%",
          },
        },
        {
          solutionId: "SOL005B",
          name: "AI-Powered Cancellation Recovery and Waitlist",
          description:
            "Cancellation triggers instant outreach to waitlist customers. AI matches availability and books replacement within minutes.",
          aiTechnologies: [
            "Waitlist management",
            "LLM matching logic",
            "Instant SMS outreach (Twilio)",
          ],
          workflow: {
            steps: [
              { node: 1, action: "Cancellation received from customer", input: "Customer ID, cancelled slot" },
              { node: 2, action: "System identifies newly open slot", input: "Date, time, crew, location" },
              { node: 3, action: "AI queries waitlist for matching customers", input: "Slot details, customer preferences" },
              { node: 4, action: "Send 'first come, first served' SMS to top 3 waitlist customers", input: "Available slot, booking link" },
              { node: 5, action: "First customer to confirm gets the slot", input: "Confirmation response" },
              { node: 6, action: "Remaining customers return to waitlist", input: "Status update" },
            ],
            dataFlow: "Cancellation → Open Slot → Waitlist Match → SMS Blast → First Confirm Wins → Waitlist Update",
          },
          implementationComplexity: "Medium",
          timeToValue: "2–3 weeks",
          roi: {
            slotRecovery: "Fill 60–80% of cancelled slots",
            jobValue: "$150–350 per cleaning",
            monthlyRevenue: "$900–2,800",
            implementationCost: "$500–1,200",
            monthlyROI: "75–550%",
          },
        },
      ],
    },
    {
      id: "PP006",
      trade: "landscaping",
      title: "Seasonal Upsell and Recurring Revenue Gaps",
      description:
        "Landscaping companies have feast-or-famine revenue cycles. Customers book once and don't return unless they call.",
      rootCause:
        "No proactive outreach tied to seasons. No automated upsell campaigns. No recurring service reminders.",
      businessImpact: {
        churn: "60–70% of one-time customers never book again",
        revenue: "Lost $500–2,000 per lapsed customer annually",
        seasonality: "Revenue drops 40–60% in off-peak months",
      },
      currentTools: ["Manual call-back lists", "One-off email blasts", "Social media posts"],
      solutions: [
        {
          solutionId: "SOL006A",
          name: "AI Seasonal Outreach and Upsell Campaign Engine",
          description:
            "Automated campaigns triggered by season, weather events, or customer job history. Personalized offers for mulching, aeration, winterization, spring cleanup.",
          aiTechnologies: [
            "CRM segmentation",
            "LLM email/SMS personalization",
            "Weather API triggers",
          ],
          workflow: {
            steps: [
              { node: 1, action: "Segment customers by last service date and service type", input: "CRM customer history" },
              { node: 2, action: "Weather API detects seasonal trigger (first frost, spring thaw, drought)", input: "Weather data feed" },
              { node: 3, action: "LLM generates personalized outreach per segment", input: "Customer history, seasonal service, weather context" },
              { node: 4, action: "Send campaign via email and SMS", input: "Customer contact info, personalized message" },
              { node: 5, action: "Track opens, clicks, and bookings", input: "Campaign engagement data" },
              { node: 6, action: "Auto-follow-up non-responders after 3 days", input: "Non-opener list, follow-up template" },
            ],
            dataFlow: "CRM Segments → Weather Trigger → LLM Personalization → Email/SMS → Engagement Tracking → Follow-up",
          },
          implementationComplexity: "Medium",
          timeToValue: "2–3 weeks",
          roi: {
            reactivation: "Reactivate 15–25% of lapsed customers",
            jobValue: "$300–1,500 per job",
            campaignsPerYear: 4,
            monthlyRevenue: "$2,000–15,000 per campaign",
            implementationCost: "$1,000–2,500",
            monthlyROI: "80–600%",
          },
        },
        {
          solutionId: "SOL006B",
          name: "Recurring Service Plan Enrollment System",
          description:
            "After every job, AI sends follow-up proposing a recurring service plan with locked-in pricing. Reduces churn and smooths revenue.",
          aiTechnologies: [
            "Post-job trigger automation",
            "LLM plan recommendation",
            "Digital contract signing",
          ],
          workflow: {
            steps: [
              { node: 1, action: "Job marked complete in CRM", input: "Job ID, service type, customer" },
              { node: 2, action: "LLM generates personalized recurring plan recommendation", input: "Job history, property type, service frequency norms" },
              { node: 3, action: "Send post-job SMS/email with plan offer", input: "Customer contact, plan details and pricing" },
              { node: 4, action: "Customer signs up via digital link", input: "Plan selection, payment method" },
              { node: 5, action: "Auto-schedule recurring appointments in calendar", input: "Plan frequency, customer availability" },
              { node: 6, action: "Monthly auto-invoice and reminders", input: "Plan ID, billing cycle" },
            ],
            dataFlow: "Job Complete → Plan Recommendation → Outreach → Digital Signup → Auto-Schedule → Recurring Billing",
          },
          implementationComplexity: "Medium",
          timeToValue: "2–3 weeks",
          roi: {
            enrollmentRate: "Convert 20–30% of one-time customers to recurring",
            planValue: "$1,200–4,800 annual contract value",
            customersPerMonth: 15,
            monthlyRecurring: "$3,000–12,000 MRR added",
            implementationCost: "$1,000–2,000",
            monthlyROI: "150–1,200%",
          },
        },
      ],
    },,
    {
      id: "PP007",
      trade: "electrical",
      title: "Quoting Delays on Complex Jobs",
      description:
        "Electrical estimates require load calculations and material lookups. Quotes take days, and customers book faster competitors.",
      rootCause:
        "Manual takeoffs and pricing. Estimators juggle spec sheets, supplier pricing, and code references by hand.",
      businessImpact: {
        leadLoss: "30-40% of estimates never get sent within 48 hours",
        revenue: "Average job value $1,500-8,000",
        timeWaste: "2-5 hours per detailed quote",
      },
      currentTools: ["Spreadsheets", "Supplier PDF catalogs", "Email"],
      solutions: [
        {
          solutionId: "SOL007A",
          name: "AI Estimate Drafting Assistant",
          description:
            "AI reads job notes and photos, drafts a line-item estimate with materials and labor, ready for review in minutes.",
          aiTechnologies: ["Vision model (GPT-4o)", "RAG over pricing catalog", "LLM drafting (Claude)"],
          workflow: {
            steps: [
              { node: 1, action: "Tech uploads job photos and notes", input: "Images, voice notes" },
              { node: 2, action: "Vision model identifies panels, runs, fixtures", input: "Images" },
              { node: 3, action: "Retrieve current material pricing", input: "Identified components" },
              { node: 4, action: "LLM drafts line-item estimate", input: "Components, pricing, labor rates" },
              { node: 5, action: "Estimator reviews and sends", input: "Draft estimate" },
            ],
            dataFlow: "Photos -> Vision -> Pricing RAG -> Claude Draft -> Estimator Review -> Customer",
          },
          implementationComplexity: "High",
          timeToValue: "3-5 weeks",
          roi: {
            recoveredLeads: "Send 90% of quotes same-day vs 60%",
            jobValue: "$1,500-8,000 per job",
            monthlyRevenue: "$8,000-30,000",
            implementationCost: "$2,000-5,000",
            monthlyROI: "150-600%",
          },
        },
        {
          solutionId: "SOL007B",
          name: "Code Reference Chatbot",
          description:
            "Field techs ask plain-English NEC code questions and get cited answers instantly instead of calling the office.",
          aiTechnologies: ["RAG over NEC handbook", "LLM (Claude)", "Mobile chat UI"],
          workflow: {
            steps: [
              { node: 1, action: "Tech asks a code question", input: "Natural language question" },
              { node: 2, action: "Retrieve relevant code sections", input: "Question embedding" },
              { node: 3, action: "LLM answers with citations", input: "Retrieved sections" },
            ],
            dataFlow: "Question -> Retrieval -> Claude -> Cited Answer",
          },
          implementationComplexity: "Medium",
          timeToValue: "2-3 weeks",
          roi: {
            recoveredLeads: "Save 30-45 min per code lookup",
            jobValue: "Fewer callbacks and rework",
            monthlyRevenue: "$2,000-6,000 in saved labor",
            implementationCost: "$1,000-2,500",
            monthlyROI: "100-400%",
          },
        },
      ],
    },
    {
      id: "PP008",
      trade: "electrical",
      title: "Unscheduled Emergency Triage",
      description:
        "Emergency calls (outages, sparking panels) mix with routine work, and dispatchers struggle to prioritize safely.",
      rootCause:
        "No structured triage. Urgency is judged ad hoc, so true emergencies wait while routine jobs get slots.",
      businessImpact: {
        leadLoss: "High-value emergency jobs lost to faster responders",
        revenue: "Emergency jobs bill 1.5-2x standard rate",
        timeWaste: "Dispatcher spends 1-2 hours/day re-sorting",
      },
      currentTools: ["Phone notes", "Whiteboard", "Calendar"],
      solutions: [
        {
          solutionId: "SOL008A",
          name: "AI Urgency Triage Router",
          description:
            "AI scores each incoming request for safety urgency and auto-routes emergencies to the nearest available tech.",
          aiTechnologies: ["LLM classification (Claude)", "Geo-routing", "SMS/push alerts (Twilio)"],
          workflow: {
            steps: [
              { node: 1, action: "Capture incoming request", input: "Call or web form text" },
              { node: 2, action: "LLM scores safety urgency 1-5", input: "Request description" },
              { node: 3, action: "Match nearest available tech", input: "Urgency, location, skills" },
              { node: 4, action: "Alert tech and confirm ETA", input: "Assignment, customer contact" },
            ],
            dataFlow: "Request -> Claude Triage -> Geo-match -> Twilio Alert -> Confirmed ETA",
          },
          implementationComplexity: "Medium",
          timeToValue: "2-4 weeks",
          roi: {
            recoveredLeads: "Capture 25% more emergency jobs",
            jobValue: "$800-3,000 per emergency",
            monthlyRevenue: "$6,000-20,000",
            implementationCost: "$1,500-3,500",
            monthlyROI: "150-700%",
          },
        },
      ],
    },
    {
      id: "PP009",
      trade: "cleaning",
      title: "Recurring Booking Churn",
      description:
        "Recurring cleaning clients cancel quietly. Without early signals, the business loses steady revenue before noticing.",
      rootCause:
        "No churn-risk monitoring. Reschedules, complaints, and skipped visits are not tracked as warning signs.",
      businessImpact: {
        leadLoss: "10-20% annual churn on recurring contracts",
        revenue: "Each recurring client worth $1,800-6,000/year",
        timeWaste: "Reactive win-back is expensive and slow",
      },
      currentTools: ["Booking app", "Spreadsheet", "Email reminders"],
      solutions: [
        {
          solutionId: "SOL009A",
          name: "AI Churn-Risk Early Warning",
          description:
            "AI watches reschedule patterns and feedback to flag at-risk recurring clients and suggests a retention offer.",
          aiTechnologies: ["Predictive scoring", "LLM feedback analysis (Claude)", "Automated outreach"],
          workflow: {
            steps: [
              { node: 1, action: "Ingest booking and feedback history", input: "Visit logs, reviews" },
              { node: 2, action: "Score churn risk per client", input: "Behavior signals" },
              { node: 3, action: "LLM drafts personalized retention offer", input: "Client history, risk score" },
              { node: 4, action: "Send offer and log outcome", input: "Offer, client contact" },
            ],
            dataFlow: "History -> Risk Scoring -> Claude Offer -> Outreach -> Outcome Log",
          },
          implementationComplexity: "Medium",
          timeToValue: "3-4 weeks",
          roi: {
            recoveredLeads: "Retain 30-50% of at-risk clients",
            jobValue: "$1,800-6,000 annual value",
            monthlyRecurring: "$3,000-10,000 MRR protected",
            implementationCost: "$1,500-3,000",
            monthlyROI: "120-500%",
          },
        },
      ],
    },
    {
      id: "PP010",
      trade: "cleaning",
      title: "Inefficient Crew Assignment",
      description:
        "Crews are assigned by habit, not by skill or location, causing wasted drive time and uneven quality.",
      rootCause:
        "Manual scheduling ignores crew skills, client preferences, and travel distance.",
      businessImpact: {
        leadLoss: "Lost capacity for 2-4 extra jobs/week",
        revenue: "Drive time eats 15-25% of paid hours",
        timeWaste: "Manager spends 5+ hours/week scheduling",
      },
      currentTools: ["Paper schedule", "Group chat", "Calendar"],
      solutions: [
        {
          solutionId: "SOL010A",
          name: "AI Crew Optimizer",
          description:
            "AI builds the daily schedule by matching crew skills and minimizing drive time across all jobs.",
          aiTechnologies: ["Route optimization", "Constraint solver", "LLM preference parsing"],
          workflow: {
            steps: [
              { node: 1, action: "Import jobs and crew availability", input: "Jobs, crews, skills" },
              { node: 2, action: "Optimize assignments and routes", input: "Locations, constraints" },
              { node: 3, action: "Publish schedule to crews", input: "Optimized plan" },
            ],
            dataFlow: "Jobs+Crews -> Optimizer -> Published Schedule",
          },
          implementationComplexity: "Medium",
          timeToValue: "2-4 weeks",
          roi: {
            recoveredLeads: "Add 2-4 jobs/week of capacity",
            jobValue: "$120-300 per cleaning",
            monthlyRevenue: "$2,500-9,000",
            implementationCost: "$1,200-3,000",
            monthlyROI: "120-450%",
          },
        },
      ],
    },
    {
      id: "PP011",
      trade: "landscaping",
      title: "Weather-Driven Reschedule Chaos",
      description:
        "Rain forces last-minute reschedules, and manually reshuffling crews and notifying clients eats the whole morning.",
      rootCause:
        "No automated weather-aware rescheduling. Every storm triggers manual phone and text scrambling.",
      businessImpact: {
        leadLoss: "Client frustration and cancellations",
        revenue: "Lost billable days during weather windows",
        timeWaste: "3-4 hours of reshuffling per weather event",
      },
      currentTools: ["Weather app", "Phone", "Paper route sheets"],
      solutions: [
        {
          solutionId: "SOL011A",
          name: "AI Weather-Aware Rescheduler",
          description:
            "AI monitors forecasts, auto-reschedules affected jobs to the next clear slot, and notifies clients and crews.",
          aiTechnologies: ["Weather API", "Optimization", "Automated SMS (Twilio)"],
          workflow: {
            steps: [
              { node: 1, action: "Monitor forecast for service areas", input: "Forecast data" },
              { node: 2, action: "Identify affected jobs", input: "Schedule, weather thresholds" },
              { node: 3, action: "Propose new slots and rebook", input: "Open capacity" },
              { node: 4, action: "Notify clients and crews", input: "Updated schedule" },
            ],
            dataFlow: "Forecast -> Affected Jobs -> Reschedule -> Twilio Notify",
          },
          implementationComplexity: "Medium",
          timeToValue: "2-3 weeks",
          roi: {
            recoveredLeads: "Recover 80% of weather-lost days",
            jobValue: "$150-600 per visit",
            monthlyRevenue: "$3,000-12,000",
            implementationCost: "$1,200-3,000",
            monthlyROI: "130-500%",
          },
        },
      ],
    },
    {
      id: "PP012",
      trade: "landscaping",
      title: "Seasonal Upsell Gaps",
      description:
        "Crews finish mowing without flagging obvious add-on work (mulch, trimming, cleanups), leaving easy revenue on the table.",
      rootCause:
        "No structured upsell prompts. Add-on opportunities depend on whether a crew member happens to mention them.",
      businessImpact: {
        leadLoss: "Most properties never get an add-on offer",
        revenue: "Add-ons average $200-800 each",
        timeWaste: "Manual follow-up rarely happens",
      },
      currentTools: ["Memory", "Occasional photos", "Verbal mentions"],
      solutions: [
        {
          solutionId: "SOL012A",
          name: "AI Property Upsell Spotter",
          description:
            "AI reviews crew site photos, spots add-on opportunities, and drafts a tailored upsell offer for the client.",
          aiTechnologies: ["Vision model (GPT-4o)", "LLM offer drafting (Claude)", "Automated email/SMS"],
          workflow: {
            steps: [
              { node: 1, action: "Crew uploads site photos", input: "Property images" },
              { node: 2, action: "Vision model spots opportunities", input: "Images" },
              { node: 3, action: "LLM drafts tailored offer", input: "Opportunities, client history" },
              { node: 4, action: "Send offer and track response", input: "Offer, client contact" },
            ],
            dataFlow: "Photos -> Vision -> Claude Offer -> Outreach -> Tracking",
          },
          implementationComplexity: "Medium",
          timeToValue: "2-4 weeks",
          roi: {
            recoveredLeads: "Offer add-ons on 100% of visits",
            jobValue: "$200-800 per add-on",
            monthlyRevenue: "$2,000-8,000",
            implementationCost: "$1,200-2,800",
            monthlyROI: "120-450%",
          },
        },
      ],
    },
    {
      id: "PP013",
      trade: "hvac",
      title: "Seasonal Demand Spikes Overwhelm Dispatch",
      description:
        "When the first heat wave or cold snap hits, call volume triples overnight and dispatch can't triage emergencies from routine tune-ups.",
      rootCause:
        "Manual triage and first-come-first-served scheduling. No way to prioritize no-heat/no-cool emergencies or balance technician load.",
      businessImpact: {
        leadLoss: "30-40% of peak-day calls go unbooked",
        revenue: "Emergency jobs average $400-1,500 each",
        timeWaste: "Dispatchers spend 5-6 hours/day on phones during spikes",
      },
      currentTools: ["Phone line", "Paper dispatch board", "Basic scheduling software"],
      solutions: [
        {
          solutionId: "SOL013A",
          name: "AI Emergency Triage and Dispatch Agent",
          description:
            "AI answers and qualifies every call, classifies urgency (no-heat vs. maintenance), and auto-assigns the nearest available tech with the right skills.",
          aiTechnologies: [
              "Voice AI (real-time)",
              "LLM urgency classification",
              "Geo-routing optimization",
          ],
          workflow: {
            steps: [
              { node: 1, action: "AI answers call and captures issue", input: "Caller audio, phone number" },
              { node: 2, action: "LLM classifies urgency and system type", input: "Transcribed issue description" },
              { node: 3, action: "Match to nearest qualified technician", input: "Tech location, skills, availability" },
              { node: 4, action: "Book slot and confirm via SMS", input: "Customer phone, assigned slot" },
              { node: 5, action: "Log to dispatch system", input: "Job details, priority tier" },
            ],
            dataFlow: "Call → Voice AI → LLM Triage → Geo-Router → Scheduler → SMS Confirm",
          },
          implementationComplexity: "High",
          timeToValue: "3-5 weeks",
          roi: {
            recoveredLeads: "Recover 25% of peak overflow = 30-50 jobs/peak week",
            jobValue: "$400-1,500 per job",
            monthlyRevenue: "$12,000-60,000 in peak months",
            implementationCost: "$2,000-5,000",
            monthlyROI: "300-1,200%",
          },
        },
        {
          solutionId: "SOL013B",
          name: "AI Maintenance Reminder and Tune-Up Engine",
          description:
            "Automatically reminds customers of seasonal tune-ups based on equipment age, last service date, and weather forecasts to smooth demand.",
          aiTechnologies: [
              "CRM segmentation",
              "Weather API triggers",
              "LLM personalization",
          ],
          workflow: {
            steps: [
              { node: 1, action: "Segment customers by last tune-up date", input: "Service history" },
              { node: 2, action: "Weather API flags upcoming season change", input: "Forecast data" },
              { node: 3, action: "LLM drafts personalized reminder", input: "Customer + equipment context" },
              { node: 4, action: "Send via email/SMS with booking link", input: "Customer contact, offer" },
              { node: 5, action: "Track bookings and follow up", input: "Response status" },
            ],
            dataFlow: "CRM → Weather API → LLM → Email/SMS → Booking → CRM",
          },
          implementationComplexity: "Low",
          timeToValue: "1-2 weeks",
          roi: {
            recoveredLeads: "Convert 15% of dormant customers = 20-40 tune-ups/month",
            jobValue: "$150-350 per tune-up",
            monthlyRevenue: "$3,000-14,000",
            implementationCost: "$500-1,500",
            monthlyROI: "200-900%",
          },
        },
      ],
    },
    {
      id: "PP014",
      trade: "roofing",
      title: "Slow, Inaccurate Estimates Lose Bids",
      description:
        "Roofing estimates require a site visit and manual measurement, so quotes take days and homeowners go with whoever responds first.",
      rootCause:
        "Manual measurement and pricing. No instant aerial estimates. Estimators are a bottleneck during storm season.",
      businessImpact: {
        leadLoss: "40-50% of leads choose a faster competitor",
        revenue: "Roof jobs average $8,000-25,000",
        timeWaste: "Each estimate takes 2-4 hours plus travel",
      },
      currentTools: ["Tape measure / drone", "Spreadsheets", "Manual proposal docs"],
      solutions: [
        {
          solutionId: "SOL014A",
          name: "AI Aerial Measurement and Instant Quote Engine",
          description:
            "Pulls satellite/aerial imagery, auto-measures roof area and pitch, and generates a priced proposal within minutes of a lead coming in.",
          aiTechnologies: [
              "Aerial imagery API",
              "Computer vision measurement",
              "LLM proposal generation",
          ],
          workflow: {
            steps: [
              { node: 1, action: "Lead submits address", input: "Property address" },
              { node: 2, action: "Fetch aerial imagery", input: "Geocoded location" },
              { node: 3, action: "CV measures area, pitch, facets", input: "Roof imagery" },
              { node: 4, action: "Apply pricing model by material", input: "Measurements, material choice" },
              { node: 5, action: "LLM generates branded proposal", input: "Pricing, scope, photos" },
              { node: 6, action: "Email proposal and schedule call", input: "Customer contact, proposal" },
            ],
            dataFlow: "Address → Imagery API → CV Model → Pricing → LLM Proposal → Email",
          },
          implementationComplexity: "High",
          timeToValue: "4-6 weeks",
          roi: {
            recoveredLeads: "Win 20% more bids via speed = 4-8 jobs/month",
            jobValue: "$8,000-25,000 per job",
            monthlyRevenue: "$32,000-200,000",
            implementationCost: "$3,000-8,000",
            monthlyROI: "400-2,000%",
          },
        },
        {
          solutionId: "SOL014B",
          name: "AI Storm-Damage Lead Outreach Agent",
          description:
            "Monitors storm/hail events by zip code and automatically launches targeted inspection-offer campaigns to affected neighborhoods.",
          aiTechnologies: [
              "Weather/hail event API",
              "Geo-targeting",
              "LLM campaign generation",
          ],
          workflow: {
            steps: [
              { node: 1, action: "Storm API detects hail/wind event", input: "Weather event feed" },
              { node: 2, action: "Map affected zip codes", input: "Event geography" },
              { node: 3, action: "LLM drafts inspection-offer message", input: "Event severity, area" },
              { node: 4, action: "Send campaign to prior leads in area", input: "CRM contacts, message" },
              { node: 5, action: "Book free inspections", input: "Responses" },
            ],
            dataFlow: "Storm API → Geo-Map → LLM → Campaign → Bookings",
          },
          implementationComplexity: "Medium",
          timeToValue: "2-3 weeks",
          roi: {
            recoveredLeads: "Generate 15-30 inspection leads per storm event",
            jobValue: "$8,000-25,000 per job",
            monthlyRevenue: "$20,000-100,000 in storm season",
            implementationCost: "$1,500-4,000",
            monthlyROI: "300-1,500%",
          },
        },
      ],
    },
    {
      id: "PP015",
      trade: "painting",
      title: "Quote Bottleneck and Color Indecision",
      description:
        "Painters lose jobs because quotes require a visit and customers stall for weeks deciding on colors and scope.",
      rootCause:
        "No instant quoting from photos. No visualization tools to help customers commit. Follow-up is manual and inconsistent.",
      businessImpact: {
        leadLoss: "35% of quoted jobs never close",
        revenue: "Interior/exterior jobs average $2,000-8,000",
        timeWaste: "Estimators do 3-5 hours of unbilled visits per week",
      },
      currentTools: ["In-person walkthroughs", "Spreadsheets", "Email follow-up"],
      solutions: [
        {
          solutionId: "SOL015A",
          name: "AI Photo-to-Quote and Color Visualizer",
          description:
            "Customer uploads room/exterior photos; AI estimates surface area and generates a quote plus a photorealistic color preview to drive a decision.",
          aiTechnologies: [
              "Computer vision area estimate",
              "Generative image color preview",
              "LLM quote builder",
          ],
          workflow: {
            steps: [
              { node: 1, action: "Customer uploads photos and dimensions", input: "Images, room sizes" },
              { node: 2, action: "CV estimates paintable surface area", input: "Photos" },
              { node: 3, action: "Generate color preview renders", input: "Photos, selected colors" },
              { node: 4, action: "Build itemized quote", input: "Area, coats, prep level" },
              { node: 5, action: "Send quote + previews with e-sign link", input: "Customer contact" },
            ],
            dataFlow: "Photos → CV Area → Image Gen → Quote → Email/E-sign",
          },
          implementationComplexity: "High",
          timeToValue: "4-5 weeks",
          roi: {
            recoveredLeads: "Close 20% more quotes = 5-10 jobs/month",
            jobValue: "$2,000-8,000 per job",
            monthlyRevenue: "$10,000-80,000",
            implementationCost: "$2,000-6,000",
            monthlyROI: "250-1,300%",
          },
        },
        {
          solutionId: "SOL015B",
          name: "AI Follow-Up and Nurture Sequence",
          description:
            "Automatically nurtures undecided leads with timed, personalized check-ins and limited-time offers until they book or opt out.",
          aiTechnologies: [
              "LLM message personalization",
              "CRM automation",
              "SMS/email delivery",
          ],
          workflow: {
            steps: [
              { node: 1, action: "Quote sent with no response triggers sequence", input: "Quote status" },
              { node: 2, action: "LLM drafts contextual follow-up", input: "Quote details, timing" },
              { node: 3, action: "Send check-in at day 2, 5, 10", input: "Customer contact" },
              { node: 4, action: "Offer scheduling incentive", input: "Lead engagement" },
              { node: 5, action: "Hand warm leads to sales", input: "Engagement signals" },
            ],
            dataFlow: "Quote → CRM Trigger → LLM → SMS/Email → Sales Handoff",
          },
          implementationComplexity: "Low",
          timeToValue: "1-2 weeks",
          roi: {
            recoveredLeads: "Recover 12% of stalled quotes = 4-8 jobs/month",
            jobValue: "$2,000-8,000 per job",
            monthlyRevenue: "$8,000-64,000",
            implementationCost: "$500-1,500",
            monthlyROI: "300-1,400%",
          },
        },
      ],
    },
    {
      id: "PP016",
      trade: "pest control",
      title: "Reactive Service and Recurring-Plan Churn",
      description:
        "Pest control is sold one-off when customers panic, then they cancel recurring plans, leaving revenue unpredictable.",
      rootCause:
        "No proactive seasonal targeting. No automated renewal/retention. No upsell from one-time to recurring plans.",
      businessImpact: {
        churn: "50-60% of one-time customers never convert to a plan",
        revenue: "Recurring plans worth $400-1,200/year each",
        timeWaste: "Manual renewal calls take 4-6 hours/week",
      },
      currentTools: ["Phone", "Spreadsheets", "Manual renewal reminders"],
      solutions: [
        {
          solutionId: "SOL016A",
          name: "AI Seasonal Pest-Pressure Campaign Engine",
          description:
            "Triggers targeted outreach when local pest activity rises (mosquito season, rodent fall migration) to convert one-time customers into plans.",
          aiTechnologies: [
              "Pest/weather data triggers",
              "CRM segmentation",
              "LLM personalization",
          ],
          workflow: {
            steps: [
              { node: 1, action: "Detect seasonal pest-pressure trigger", input: "Weather/pest data" },
              { node: 2, action: "Segment customers by service history", input: "CRM data" },
              { node: 3, action: "LLM drafts plan-conversion offer", input: "Customer history, season" },
              { node: 4, action: "Send email/SMS with sign-up link", input: "Customer contact" },
              { node: 5, action: "Track conversions to recurring plan", input: "Sign-up status" },
            ],
            dataFlow: "Pest Data → CRM → LLM → SMS/Email → Plan Sign-up",
          },
          implementationComplexity: "Medium",
          timeToValue: "2-3 weeks",
          roi: {
            recoveredLeads: "Convert 18% of one-time customers = 15-30 plans/month",
            jobValue: "$400-1,200 per plan annually",
            monthlyRevenue: "$6,000-36,000 in recurring value",
            implementationCost: "$1,000-3,000",
            monthlyROI: "200-1,000%",
          },
        },
        {
          solutionId: "SOL016B",
          name: "AI Renewal and Retention Agent",
          description:
            "Predicts at-risk recurring accounts and automatically sends retention offers and reschedules lapsed visits before churn.",
          aiTechnologies: [
              "Churn-prediction model",
              "LLM retention messaging",
              "Automated scheduling",
          ],
          workflow: {
            steps: [
              { node: 1, action: "Model flags at-risk accounts", input: "Payment + visit history" },
              { node: 2, action: "LLM drafts retention offer", input: "Account context" },
              { node: 3, action: "Send offer and reschedule link", input: "Customer contact" },
              { node: 4, action: "Auto-book recovered visits", input: "Availability" },
              { node: 5, action: "Escalate persistent churn risk to staff", input: "Engagement signals" },
            ],
            dataFlow: "Model → LLM → SMS/Email → Scheduler → Staff Escalation",
          },
          implementationComplexity: "Medium",
          timeToValue: "3-4 weeks",
          roi: {
            recoveredLeads: "Retain 20% of at-risk accounts = 10-20 saved plans/month",
            jobValue: "$400-1,200 per plan annually",
            monthlyRevenue: "$4,000-24,000 retained",
            implementationCost: "$1,500-4,000",
            monthlyROI: "150-700%",
          },
        },
      ],
    },
    {
      id: "PP017",
      trade: "handyman",
      title: "Tiny Jobs, High Admin Overhead",
      description:
        "Handyman work is many small jobs, and the time spent quoting, scheduling, and invoicing each one eats the margin.",
      rootCause:
        "No automated intake or quoting for small varied jobs. Manual scheduling and invoicing per task.",
      businessImpact: {
        leadLoss: "25% of inquiries never get a quote in time",
        revenue: "Jobs average $150-600 each",
        timeWaste: "Admin overhead is 30-40% of each small job",
      },
      currentTools: ["Text messages", "Notebook scheduling", "Manual invoices"],
      solutions: [
        {
          solutionId: "SOL017A",
          name: "AI Intake, Quote, and Booking Assistant",
          description:
            "Customers describe the job by text or photo; AI scopes it, gives a price range, books a slot, and creates the invoice automatically.",
          aiTechnologies: [
              "LLM job scoping",
              "Computer vision (photos)",
              "Automated scheduling + invoicing",
          ],
          workflow: {
            steps: [
              { node: 1, action: "Customer texts job description/photo", input: "Message, images" },
              { node: 2, action: "LLM scopes task and time estimate", input: "Description, photos" },
              { node: 3, action: "Generate price range and slot options", input: "Scope, availability" },
              { node: 4, action: "Customer confirms booking", input: "Selected slot" },
              { node: 5, action: "Auto-create invoice draft", input: "Job scope, price" },
            ],
            dataFlow: "Text/Photo → LLM Scope → Pricing → Scheduler → Invoice",
          },
          implementationComplexity: "Medium",
          timeToValue: "2-3 weeks",
          roi: {
            recoveredLeads: "Capture 20% more small jobs = 30-60 jobs/month",
            jobValue: "$150-600 per job",
            monthlyRevenue: "$4,500-36,000",
            implementationCost: "$1,000-3,000",
            monthlyROI: "200-1,100%",
          },
        },
        {
          solutionId: "SOL017B",
          name: "AI Recurring-Task Reminder Engine",
          description:
            "Tracks seasonal/recurring home maintenance (gutter cleaning, caulking, filter swaps) and nudges past customers to rebook.",
          aiTechnologies: [
              "CRM segmentation",
              "Seasonal triggers",
              "LLM personalization",
          ],
          workflow: {
            steps: [
              { node: 1, action: "Tag jobs with recurring cadence", input: "Job type, date" },
              { node: 2, action: "Trigger reminder at next interval", input: "Cadence schedule" },
              { node: 3, action: "LLM drafts rebooking nudge", input: "Job history" },
              { node: 4, action: "Send with one-tap booking", input: "Customer contact" },
              { node: 5, action: "Log rebookings", input: "Response" },
            ],
            dataFlow: "CRM → Trigger → LLM → SMS/Email → Rebooking",
          },
          implementationComplexity: "Low",
          timeToValue: "1-2 weeks",
          roi: {
            recoveredLeads: "Rebook 15% of past customers = 20-40 jobs/month",
            jobValue: "$150-600 per job",
            monthlyRevenue: "$3,000-24,000",
            implementationCost: "$500-1,500",
            monthlyROI: "250-1,200%",
          },
        },
      ],
    },
    {
      id: "PP018",
      trade: "flooring",
      title: "Measurement Errors and Material Waste",
      description:
        "Inaccurate measurements cause material over/under-ordering and slow quotes, hurting margins and customer trust.",
      rootCause:
        "Manual measuring and quoting. No instant material estimates. No visualization to close the sale.",
      businessImpact: {
        leadLoss: "30% of quotes lost to slow turnaround",
        revenue: "Flooring jobs average $3,000-12,000",
        timeWaste: "Each measure-and-quote takes 2-3 hours plus travel",
      },
      currentTools: ["Tape measure", "Spreadsheets", "Sample books"],
      solutions: [
        {
          solutionId: "SOL018A",
          name: "AI Room-Scan Measurement and Quote Engine",
          description:
            "Customer scans rooms with their phone; AI calculates square footage, adds waste factor, and produces a priced quote with material options.",
          aiTechnologies: [
              "LiDAR/AR room scan",
              "Computer vision area calc",
              "LLM quote builder",
          ],
          workflow: {
            steps: [
              { node: 1, action: "Customer scans rooms via phone AR", input: "Room scan data" },
              { node: 2, action: "CV computes area + waste factor", input: "Scan geometry" },
              { node: 3, action: "Apply pricing per material", input: "Area, material choice" },
              { node: 4, action: "Generate quote with options", input: "Pricing, scope" },
              { node: 5, action: "Send quote with visualizer link", input: "Customer contact" },
            ],
            dataFlow: "AR Scan → CV Area → Pricing → Quote → Email",
          },
          implementationComplexity: "High",
          timeToValue: "4-6 weeks",
          roi: {
            recoveredLeads: "Close 18% more quotes = 5-9 jobs/month",
            jobValue: "$3,000-12,000 per job",
            monthlyRevenue: "$15,000-108,000",
            implementationCost: "$2,500-7,000",
            monthlyROI: "300-1,500%",
          },
        },
        {
          solutionId: "SOL018B",
          name: "AI Material-Order Optimizer",
          description:
            "Calculates exact material and waste per job and auto-drafts supplier orders to cut over-ordering and stockouts.",
          aiTechnologies: [
              "Optimization model",
              "Supplier API integration",
              "LLM order drafting",
          ],
          workflow: {
            steps: [
              { node: 1, action: "Pull job measurements", input: "Quote data" },
              { node: 2, action: "Optimize order quantity + waste buffer", input: "Area, material specs" },
              { node: 3, action: "Check supplier stock/pricing", input: "Supplier API" },
              { node: 4, action: "Draft purchase order", input: "Optimized quantities" },
              { node: 5, action: "Send to manager for approval", input: "PO draft" },
            ],
            dataFlow: "Job Data → Optimizer → Supplier API → PO Draft → Approval",
          },
          implementationComplexity: "Medium",
          timeToValue: "3-4 weeks",
          roi: {
            recoveredLeads: "Cut material waste 10-15% across all jobs",
            jobValue: "$200-800 saved per job",
            monthlyRevenue: "$2,000-12,000 in saved costs",
            implementationCost: "$1,500-4,000",
            monthlyROI: "150-700%",
          },
        },
      ],
    },
    {
      id: "PP019",
      trade: "appliance repair",
      title: "Wrong Parts and Repeat Visits",
      description:
        "Techs arrive without the right part because the issue wasn't diagnosed up front, forcing second trips that kill productivity.",
      rootCause:
        "No pre-visit diagnosis. Parts guessed from vague phone descriptions. No first-visit fix-rate tracking.",
      businessImpact: {
        leadLoss: "20% of customers cancel after a failed first visit",
        revenue: "Repair jobs average $150-450 each",
        timeWaste: "Return trips cost 1-2 hours + parts logistics per job",
      },
      currentTools: ["Phone intake", "Generic parts van stock", "Paper work orders"],
      solutions: [
        {
          solutionId: "SOL019A",
          name: "AI Pre-Visit Diagnostic and Parts Predictor",
          description:
            "Customer describes the fault by text/photo and model number; AI predicts the likely failure and the exact parts the tech should bring.",
          aiTechnologies: [
              "LLM diagnostic reasoning",
              "Computer vision (model/error photos)",
              "Parts-catalog lookup",
          ],
          workflow: {
            steps: [
              { node: 1, action: "Customer submits symptoms + model/photo", input: "Description, images, model number" },
              { node: 2, action: "LLM predicts likely fault", input: "Symptoms, model data" },
              { node: 3, action: "Map fault to required parts", input: "Diagnosis, parts catalog" },
              { node: 4, action: "Pre-load parts list to work order", input: "Predicted parts" },
              { node: 5, action: "Notify tech before dispatch", input: "Work order" },
            ],
            dataFlow: "Text/Photo → LLM Diagnosis → Parts Lookup → Work Order → Tech",
          },
          implementationComplexity: "Medium",
          timeToValue: "3-4 weeks",
          roi: {
            recoveredLeads: "Lift first-visit fix rate 15-20% = 20-40 saved trips/month",
            jobValue: "$150-450 per job",
            monthlyRevenue: "$3,000-18,000 in recovered productivity",
            implementationCost: "$1,500-4,000",
            monthlyROI: "200-900%",
          },
        },
        {
          solutionId: "SOL019B",
          name: "AI Warranty and Replacement Advisor",
          description:
            "Checks warranty status and repair-vs-replace economics, then recommends the best option and upsells extended plans where it makes sense.",
          aiTechnologies: [
              "LLM cost analysis",
              "Warranty database lookup",
              "Personalized recommendation",
          ],
          workflow: {
            steps: [
              { node: 1, action: "Capture appliance age and fault", input: "Model, age, diagnosis" },
              { node: 2, action: "Check warranty status", input: "Model, purchase data" },
              { node: 3, action: "Compute repair vs. replace economics", input: "Repair cost, unit cost" },
              { node: 4, action: "LLM recommends best option", input: "Cost analysis" },
              { node: 5, action: "Present option + plan upsell", input: "Recommendation" },
            ],
            dataFlow: "Appliance Data → Warranty DB → Cost Model → LLM → Customer",
          },
          implementationComplexity: "Low",
          timeToValue: "2-3 weeks",
          roi: {
            recoveredLeads: "Upsell 12% to plans/replacements = 10-20 deals/month",
            jobValue: "$200-700 per upsell",
            monthlyRevenue: "$2,000-14,000",
            implementationCost: "$1,000-2,500",
            monthlyROI: "200-1,000%",
          },
        },
      ],
    },
    {
      id: "PP020",
      trade: "garage door",
      title: "Emergency Calls and Safety-Liability Pressure",
      description:
        "Stuck or broken garage doors are urgent and safety-sensitive, but slow response and unclear pricing send customers elsewhere.",
      rootCause:
        "No instant triage of emergency vs. routine. No upfront pricing. Manual scheduling delays urgent same-day jobs.",
      businessImpact: {
        leadLoss: "30% of urgent calls lost to faster competitors",
        revenue: "Repairs/installs average $250-2,500",
        timeWaste: "Dispatch spends 3-4 hours/day triaging by phone",
      },
      currentTools: ["Phone line", "Manual scheduling", "Verbal quotes"],
      solutions: [
        {
          solutionId: "SOL020A",
          name: "AI Urgent-Triage and Same-Day Booking Agent",
          description:
            "AI qualifies the issue, flags safety hazards (broken spring, off-track door), gives upfront pricing, and books same-day slots automatically.",
          aiTechnologies: [
              "Voice/chat AI",
              "LLM safety triage",
              "Automated scheduling",
          ],
          workflow: {
            steps: [
              { node: 1, action: "AI captures the door issue", input: "Caller description/photo" },
              { node: 2, action: "LLM flags safety hazard + urgency", input: "Issue details" },
              { node: 3, action: "Quote upfront price range", input: "Issue type, parts" },
              { node: 4, action: "Book same-day or next slot", input: "Availability" },
              { node: 5, action: "Confirm and brief the tech", input: "Job details" },
            ],
            dataFlow: "Call/Chat → LLM Triage → Pricing → Scheduler → Tech Brief",
          },
          implementationComplexity: "Medium",
          timeToValue: "2-4 weeks",
          roi: {
            recoveredLeads: "Recover 22% of urgent calls = 15-30 jobs/month",
            jobValue: "$250-2,500 per job",
            monthlyRevenue: "$6,000-60,000",
            implementationCost: "$1,500-4,000",
            monthlyROI: "250-1,300%",
          },
        },
        {
          solutionId: "SOL020B",
          name: "AI Maintenance and Safety-Check Reminder Engine",
          description:
            "Tracks installs and reminds customers of annual safety inspections and tune-ups, generating recurring revenue and reducing liability.",
          aiTechnologies: [
              "CRM segmentation",
              "Time-based triggers",
              "LLM personalization",
          ],
          workflow: {
            steps: [
              { node: 1, action: "Tag installs with service interval", input: "Install date, door type" },
              { node: 2, action: "Trigger annual safety reminder", input: "Schedule" },
              { node: 3, action: "LLM drafts reminder + offer", input: "Customer history" },
              { node: 4, action: "Send with booking link", input: "Customer contact" },
              { node: 5, action: "Track booked inspections", input: "Response" },
            ],
            dataFlow: "CRM → Trigger → LLM → SMS/Email → Booking",
          },
          implementationComplexity: "Low",
          timeToValue: "1-2 weeks",
          roi: {
            recoveredLeads: "Rebook 15% for tune-ups = 15-30 jobs/month",
            jobValue: "$120-350 per inspection",
            monthlyRevenue: "$2,000-10,000",
            implementationCost: "$500-1,500",
            monthlyROI: "200-1,000%",
          },
        },
      ],
    },
  ],
};
