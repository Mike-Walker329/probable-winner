export const platformData = {
  platform: {
    name: "Home Service AI Integration Learning Platform",
    version: "1.0",
    description: "Interactive learning and ideation platform for AI automation in home services",
  },
  trades: ["plumbing", "electrical", "cleaning", "landscaping"],
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
    },
  ],
};
