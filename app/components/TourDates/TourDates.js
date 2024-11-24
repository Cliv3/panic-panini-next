import ButtonPrimary from "@/app/global-components/ButtonPrimary/ButtonPrimary";

const roadmapPhases = [
	{
	  id: 1,
	  phase: "Phase 1/3",
	  title: "Laying the Foundation",
	  items: [
		"Community Takeover: take over the $WORK movement with a fresh, dynamic vision.",
		"Assemble the Core Team: includes developers and short-form video editors to lead technical and creative efforts.",
		" Launch official pages on Instagram and TikTok, bringing the hustle culture online.",
		"Build a network of grinders and hustlers, with the goal of securing the first 1,000 holders.",
		"Introduce our AI-powered motivator on Twitter, providing daily inspiration and trading/productivity tips."
	  ]
	},
	{
	  id: 2,
	  phase: "Phase 2/3",
	  title: "Scaling the Hustle",
	  items: [
		"Marketing Blitz: Launch a strategic campaign targeting everyday go-getters on TikTok and Instagram.",
		"Influencer Partnerships: Onboard relatable TikTok/IG influencers to amplify our message.",
		"Community Content Power: Decentralize resources (templates, guides, video assets) to enable community members to create and share $WORK-related content effortlessly.",
		"Stay Connected: Host regular community calls to foster collaboration, Network, Learn and keep the grind alive.",
		"Website 2.0: Revamp the website to reflect $WORK's growing identity, with enhanced resources and sleek design."
	  ]
	},
	{
	  id: 3,
	  phase: "Phase 3/3",
	  title: "Elevating the Vision",
	  items: [
		"AI Agent 2.0: Upgrade the AI Agent with advanced features, including personalized motivation, task tracking, and analytics to measure progress.",
		"IRL Power Moves: Host real-life events, from motivational meetups, Run sessions to business workshops, strengthening the $WORK tribe.",
		"Reach 10 million Mcap",
		"More to come…"
	  ]
	}
  ];
  

export default function TourDates() {
	return (
		<div className="max-w-6xl mx-auto p-2">
      <h2 className="text-2xl font-bold text-center mb-6 bg-gradient-to-r from-yellow-400 to-amber-500 bg-clip-text text-transparent">
        $WORK Roadmap
      </h2>
      <ul className="space-y-4">
        {roadmapPhases.map((phase) => (
          <li key={phase.id} className="bg-white rounded-lg shadow-md overflow-hidden border border-yellow-100 hover:border-yellow-300 transition-all duration-300">
            <div className="bg-gradient-to-r from-yellow-400 to-amber-500 p-2">
              <div className="flex items-center">
                <span className="text-black font-bold text-sm">{phase.phase}:</span>
                <span className="ml-2 text-black font-bold text-sm">{phase.title}</span>
              </div>
            </div>
            <ul className="p-3 space-y-2">
              {phase.items.map((item, index) => (
                <li key={index} className="flex items-start space-x-2 group hover:transform hover:translate-x-2 transition-transform duration-200">
                  <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-yellow-400 mt-1.5" />
                  <span className="text-gray-700 text-sm group-hover:text-gray-900">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
	);
}
