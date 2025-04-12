import { CheckCircle, Clock, Calendar } from "lucide-react"
import Image from "next/image"

export default function ACFilterReplacement() {
  return (
    <article className="max-w-3xl mx-auto">
      <div className="relative h-[300px] mb-8 rounded-lg overflow-hidden">
        <Image
          src="/hvac-checkup.png"
          alt="AC Filter Replacement Guide"
          fill
          className="object-cover"
          priority
        />
      </div>

      <div className="flex items-center text-gray-600 mb-8">
        <div className="flex items-center mr-4">
          <Calendar className="h-4 w-4 mr-1" />
          <span>April 12, 2024</span>
        </div>
        <div className="flex items-center">
          <Clock className="h-4 w-4 mr-1" />
          <span>5 min read</span>
        </div>
      </div>

      <h1 className="text-3xl font-bold text-gray-900 mb-6">When to Replace Your AC Filter (Dallas Guide)</h1>
      
      <p className="text-gray-600 mb-6 text-lg">
        Expert advice, maintenance tips, and industry insights to help you get the most from your HVAC system.
      </p>
      
      <div className="prose prose-lg max-w-none">
        <p className="text-gray-600 mb-6">
          Living in Dallas means your AC works hard—especially during those long, hot summers. 
          But many homeowners don't realize how much of a difference a simple filter change can make. 
          Your air filter isn't just about clean air—it's also about the efficiency, longevity, and reliability of your HVAC system.
        </p>

        <p className="text-gray-600 mb-6">
          So… how often should you really replace your AC filter in Dallas?
          Let's break it down.
        </p>

        <div className="bg-blue-50 p-6 rounded-lg mb-8">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">📆 General Rule: Every 1 to 3 Months</h3>
          <p className="text-gray-600 mb-4">Most homes in Dallas should replace their air filters every 1 to 3 months. But that range depends on a few key factors:</p>
          <ul className="space-y-2">
            <li className="flex items-center">
              <CheckCircle className="h-5 w-5 text-blue-500 mr-2" />
              <span>🐾 Do you have pets? Pet hair and dander clog filters faster. If you have dogs or cats, aim for every month.</span>
            </li>
            <li className="flex items-center">
              <CheckCircle className="h-5 w-5 text-blue-500 mr-2" />
              <span>🧼 Are you sensitive to allergies or dust? North Texas can be tough on allergy sufferers—especially during spring. For clean air and fewer sniffles, stick with a 30–45 day replacement schedule.</span>
            </li>
            <li className="flex items-center">
              <CheckCircle className="h-5 w-5 text-blue-500 mr-2" />
              <span>👨‍👩‍👧‍👦 How many people live in the house? More people = more dust and activity. Bigger families might need to replace filters more often than a single-person household.</span>
            </li>
            <li className="flex items-center">
              <CheckCircle className="h-5 w-5 text-blue-500 mr-2" />
              <span>🏠 Do you live in a new home or one under renovation? New homes and remodeling projects kick up a surprising amount of dust. You may need to change filters every 2–3 weeks during this time.</span>
            </li>
          </ul>
        </div>

        <div className="bg-blue-50 p-6 rounded-lg mb-8">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">💡 Dallas-Specific Tip</h3>
          <p className="text-gray-600 mb-4">
            Dallas summers = nonstop AC use. That means your system pulls more air through the filter daily—and clogs it faster.
            In July and August, we recommend checking your filter every 3–4 weeks, especially if your system runs 24/7.
          </p>
        </div>

        <div className="bg-blue-50 p-6 rounded-lg mb-8">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">🔧 Signs Your Filter Needs Replacing</h3>
          <p className="text-gray-600 mb-4">Not sure when you last swapped your filter? Look out for these signs:</p>
          <ul className="space-y-2">
            <li className="flex items-center">
              <CheckCircle className="h-5 w-5 text-blue-500 mr-2" />
              <span>Weak airflow from vents</span>
            </li>
            <li className="flex items-center">
              <CheckCircle className="h-5 w-5 text-blue-500 mr-2" />
              <span>Unusual dust buildup on furniture</span>
            </li>
            <li className="flex items-center">
              <CheckCircle className="h-5 w-5 text-blue-500 mr-2" />
              <span>AC system seems to run longer than usual</span>
            </li>
            <li className="flex items-center">
              <CheckCircle className="h-5 w-5 text-blue-500 mr-2" />
              <span>Higher energy bills (yes, dirty filters make your system work harder)</span>
            </li>
          </ul>
        </div>

        <div className="bg-blue-50 p-6 rounded-lg mb-8">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">🛠️ What Type of Filter Should You Use?</h3>
          <p className="text-gray-600 mb-4">In Dallas homes, we typically recommend:</p>
          <ul className="space-y-2">
            <li className="flex items-center">
              <CheckCircle className="h-5 w-5 text-blue-500 mr-2" />
              <span>MERV 8–11 for general use</span>
            </li>
            <li className="flex items-center">
              <CheckCircle className="h-5 w-5 text-blue-500 mr-2" />
              <span>MERV 13 if you have pets or allergies</span>
            </li>
            <li className="flex items-center">
              <CheckCircle className="h-5 w-5 text-blue-500 mr-2" />
              <span>Avoid washable filters unless you clean them every 2 weeks</span>
            </li>
          </ul>
        </div>

        <div className="bg-blue-50 p-6 rounded-lg">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">✅ The Bottom Line</h3>
          <p className="text-gray-600 mb-4">
            Replacing your AC filter isn't just maintenance—it's prevention.
            In a city like Dallas, where summers are brutal and AC is essential, changing your filter regularly helps:
          </p>
          <ul className="space-y-2">
            <li className="flex items-center">
              <CheckCircle className="h-5 w-5 text-blue-500 mr-2" />
              <span>Lower energy bills</span>
            </li>
            <li className="flex items-center">
              <CheckCircle className="h-5 w-5 text-blue-500 mr-2" />
              <span>Improve indoor air quality</span>
            </li>
            <li className="flex items-center">
              <CheckCircle className="h-5 w-5 text-blue-500 mr-2" />
              <span>Extend the life of your HVAC system</span>
            </li>
          </ul>
          <p className="text-gray-600 mt-4">
            Need help figuring out what filter your system needs—or want a professional checkup?
            UCBM HVAC Inc. is here for Dallas homeowners, with honest pricing and expert advice.
          </p>
        </div>
      </div>
    </article>
  )
} 