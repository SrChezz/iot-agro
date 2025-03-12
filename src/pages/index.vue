<template>
  <div class="min-h-screen bg-gray-50 font-sans">
    <!-- Header with navigation -->
    <header class="bg-white shadow-sm">
      <div
        class="container mx-auto px-4 py-3 flex justify-between items-center"
      >
        <div class="flex items-center">
          <div
            class="w-10 h-10 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center text-white font-bold"
          >
            CV
          </div>
          <span class="ml-3 text-lg font-semibold text-gray-800"
            >ProCV Builder</span
          >
        </div>

        <nav
          class="bg-white border border-gray-200 rounded-full px-2 py-1 flex space-x-1 shadow-sm"
        >
          <button
            v-for="tab in tabs"
            :key="tab.id"
            :class="[
              'px-5 py-2 rounded-full font-medium transition-colors text-sm',
              activeTab === tab.id
                ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-sm'
                : 'text-gray-600 hover:bg-gray-100',
            ]"
            @click="activeTab = tab.id"
          >
            <div class="flex items-center">
              <component :is="tab.icon" class="w-4 h-4 mr-2" />
              {{ tab.name }}
            </div>
          </button>
        </nav>

        <div
          class="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center cursor-pointer hover:bg-gray-200 transition-colors"
        >
          <i-lucide:circle-user class="w-6 h-6 text-gray-600" />
        </div>
      </div>
    </header>

    <main class="container mx-auto p-4 mt-6">
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <!-- Left column - Profile information -->
        <div class="lg:col-span-1 space-y-6">
          <!-- User profile card -->
          <div class="bg-white rounded-xl p-6 shadow-md">
            <div class="flex flex-col items-center">
              <div
                class="w-24 h-24 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full mb-4 flex items-center justify-center text-white text-2xl font-bold"
              >
                JD
              </div>
              <h2 class="text-xl font-bold text-gray-800">John Doe</h2>
              <p class="text-blue-600 font-medium">Product Manager</p>
              <p class="text-gray-500 text-sm mt-1">San Francisco, CA</p>

              <div class="w-full mt-6 pt-6 border-t border-gray-100">
                <div class="flex justify-between items-center mb-4">
                  <span class="text-sm font-medium text-gray-500"
                    >Profile Completion</span
                  >
                  <span class="text-sm font-medium text-blue-600">85%</span>
                </div>
                <div class="w-full bg-gray-200 rounded-full h-2">
                  <div
                    class="bg-gradient-to-r from-blue-600 to-indigo-600 h-2 rounded-full"
                    style="width: 85%"
                  ></div>
                </div>
              </div>
            </div>
          </div>

          <!-- Profile details card -->
          <div class="bg-white rounded-xl p-6 shadow-md">
            <h2 class="text-lg font-bold text-gray-800 mb-4">
              Contact Information
            </h2>

            <div class="space-y-4">
              <div class="flex items-center">
                <div
                  class="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0"
                >
                  <i-lucide:mail class="w-5 h-5 text-blue-600" />
                </div>
                <div class="ml-3">
                  <p class="text-sm text-gray-500">Email</p>
                  <p class="text-sm font-medium text-gray-800">
                    john.doe@example.com
                  </p>
                </div>
              </div>

              <div class="flex items-center">
                <div
                  class="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0"
                >
                  <i-lucide:phone class="w-5 h-5 text-blue-600" />
                </div>
                <div class="ml-3">
                  <p class="text-sm text-gray-500">Phone</p>
                  <p class="text-sm font-medium text-gray-800">
                    (555) 123-4567
                  </p>
                </div>
              </div>

              <div class="flex items-center">
                <div
                  class="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0"
                >
                  <i-lucide:linkedin class="w-5 h-5 text-blue-600" />
                </div>
                <div class="ml-3">
                  <p class="text-sm text-gray-500">LinkedIn</p>
                  <p class="text-sm font-medium text-gray-800">
                    linkedin.com/in/johndoe
                  </p>
                </div>
              </div>

              <div class="flex items-center">
                <div
                  class="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0"
                >
                  <i-lucide:github class="w-5 h-5 text-blue-600" />
                </div>
                <div class="ml-3">
                  <p class="text-sm text-gray-500">GitHub</p>
                  <p class="text-sm font-medium text-gray-800">
                    github.com/johndoe
                  </p>
                </div>
              </div>
            </div>

            <div class="mt-6 pt-6 border-t border-gray-100">
              <h3 class="text-lg font-bold text-gray-800 mb-4">Skills</h3>
              <div class="flex flex-wrap gap-2">
                <span
                  v-for="(skill, index) in skills"
                  :key="index"
                  class="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium"
                >
                  {{ skill }}
                </span>
              </div>
            </div>

            <div class="mt-6 pt-6 border-t border-gray-100">
              <h3 class="text-lg font-bold text-gray-800 mb-4">Languages</h3>
              <div class="space-y-3">
                <div v-for="(language, index) in languages" :key="index">
                  <div class="flex justify-between items-center mb-1">
                    <span class="text-sm font-medium text-gray-700">{{
                      language.name
                    }}</span>
                    <span class="text-xs text-gray-500">{{
                      language.level
                    }}</span>
                  </div>
                  <div class="w-full bg-gray-200 rounded-full h-1.5">
                    <div
                      class="bg-blue-600 h-1.5 rounded-full"
                      :style="`width: ${language.percentage}%`"
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Right column - CV content -->
        <div class="lg:col-span-2">
          <div class="bg-white rounded-xl shadow-md overflow-hidden">
            <!-- CV Header -->
            <div
              class="bg-gradient-to-r from-blue-600 to-indigo-600 px-6 py-8 text-white"
            >
              <h1 class="text-3xl font-bold">CURRICULUM VITAE</h1>
              <p class="mt-2 opacity-80">
                A comprehensive overview of my professional experience and
                qualifications
              </p>
            </div>

            <!-- CV Content -->
            <div class="p-6">
              <!-- CV View -->
              <div v-if="activeTab === 'cv'" class="space-y-8">
                <div class="flex justify-between items-center">
                  <h2 class="text-xl font-bold text-gray-800">John Doe's CV</h2>
                  <button
                    class="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    <i-lucide:download class="w-4 h-4" />
                    Download PDF
                  </button>
                </div>

                <section
                  v-for="(section, index) in cvSections"
                  :key="index"
                  class="space-y-4"
                >
                  <div class="flex items-center gap-2">
                    <component
                      :is="section.icon"
                      class="w-5 h-5 text-blue-600"
                    />
                    <h2 class="text-lg font-bold text-gray-800">
                      {{ section.title }}
                    </h2>
                  </div>

                  <div class="pl-7">
                    <div
                      v-for="(item, itemIndex) in section.items"
                      :key="itemIndex"
                      class="mb-5 pb-5 border-b border-gray-100 last:border-0 last:pb-0"
                    >
                      <div class="flex justify-between mb-1">
                        <div class="font-bold text-gray-800">
                          {{ item.title }}
                        </div>
                        <div class="text-sm text-gray-500 flex items-center">
                          <i-lucide:calendar class="w-3 h-3 mr-1" />
                          {{ item.date }}
                        </div>
                      </div>
                      <div class="text-sm text-blue-600 mb-2">
                        {{ item.subtitle }}
                      </div>
                      <p class="text-sm text-gray-600">
                        {{ item.description }}
                      </p>

                      <div v-if="item.achievements" class="mt-3">
                        <p class="text-xs font-medium text-gray-500 mb-1">
                          KEY ACHIEVEMENTS
                        </p>
                        <ul
                          class="list-disc list-inside text-sm text-gray-600 space-y-1"
                        >
                          <li
                            v-for="(achievement, achIndex) in item.achievements"
                            :key="achIndex"
                          >
                            {{ achievement }}
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </section>
              </div>

              <!-- Jobs View -->
              <div v-else-if="activeTab === 'jobs'" class="space-y-6">
                <div class="flex justify-between items-center">
                  <h2 class="text-xl font-bold text-gray-800">
                    Recommended Jobs
                  </h2>
                  <div class="relative">
                    <input
                      type="text"
                      placeholder="Search jobs..."
                      class="pl-9 pr-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                    <i-lucide:search
                      class="w-4 h-4 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2"
                    />
                  </div>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div
                    v-for="(job, index) in jobs"
                    :key="index"
                    class="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow"
                  >
                    <div class="flex items-start">
                      <div
                        class="w-12 h-12 rounded-lg bg-gray-100 flex items-center justify-center flex-shrink-0"
                      >
                        <component
                          :is="job.icon"
                          class="w-6 h-6 text-gray-500"
                        />
                      </div>
                      <div class="ml-4">
                        <div class="font-bold text-gray-800 mb-1">
                          {{ job.title }}
                        </div>
                        <div class="text-sm text-blue-600 mb-2">
                          {{ job.company }}
                        </div>
                        <div
                          class="flex items-center text-xs text-gray-500 mb-3"
                        >
                          <i-lucide:map-pin class="w-3 h-3 mr-1" />
                          {{ job.location }}
                          <span class="mx-2">•</span>
                          <i-lucide:clock class="w-3 h-3 mr-1" />
                          {{ job.date }}
                        </div>
                        <div class="flex flex-wrap gap-2 mb-4">
                          <span
                            v-for="(tag, tagIndex) in job.tags"
                            :key="tagIndex"
                            class="px-2 py-1 bg-gray-100 text-gray-600 rounded text-xs"
                          >
                            {{ tag }}
                          </span>
                        </div>
                        <div class="flex gap-2">
                          <button
                            class="px-3 py-1.5 bg-blue-600 text-white text-sm rounded-lg hover:bg-blue-700 transition-colors"
                          >
                            Apply Now
                          </button>
                          <button
                            class="px-3 py-1.5 border border-gray-300 text-gray-600 text-sm rounded-lg hover:bg-gray-50 transition-colors"
                          >
                            Save
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Learning View -->
              <div v-else-if="activeTab === 'learning'" class="space-y-6">
                <div class="flex justify-between items-center">
                  <h2 class="text-xl font-bold text-gray-800">
                    My Learning Path
                  </h2>
                  <button
                    class="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg text-gray-600 hover:bg-gray-50 transition-colors"
                  >
                    <i-lucide:filter class="w-4 h-4" />
                    Filter
                  </button>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div
                    v-for="(course, index) in courses"
                    :key="index"
                    class="border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow"
                  >
                    <div
                      class="h-32 bg-gradient-to-r from-blue-500 to-indigo-600 relative"
                    >
                      <div
                        class="absolute inset-0 flex items-center justify-center"
                      >
                        <component
                          :is="course.icon"
                          class="w-12 h-12 text-white opacity-20"
                        />
                      </div>
                      <div
                        class="absolute top-3 right-3 bg-white/90 px-2 py-1 rounded text-xs font-medium text-gray-700"
                      >
                        {{ course.progress }}% Complete
                      </div>
                    </div>
                    <div class="p-4">
                      <div class="font-bold text-gray-800 mb-1">
                        {{ course.title }}
                      </div>
                      <div class="text-sm text-blue-600 mb-2">
                        {{ course.provider }}
                      </div>
                      <div class="flex items-center text-xs text-gray-500 mb-3">
                        <i-lucide:clock class="w-3 h-3 mr-1" />
                        {{ course.duration }}
                        <span class="mx-2">•</span>
                        <i-lucide:users class="w-3 h-3 mr-1" />
                        {{ course.students }} students
                      </div>
                      <div class="flex flex-wrap gap-2 mb-4">
                        <span
                          class="px-2 py-1 bg-blue-100 text-blue-600 rounded text-xs font-medium"
                        >
                          {{ course.level }}
                        </span>
                        <span
                          class="px-2 py-1 bg-gray-100 text-gray-600 rounded text-xs"
                        >
                          {{ course.category }}
                        </span>
                      </div>
                      <div class="w-full bg-gray-200 rounded-full h-1.5 mb-4">
                        <div
                          class="bg-blue-600 h-1.5 rounded-full"
                          :style="`width: ${course.progress}%`"
                        ></div>
                      </div>
                      <button
                        class="w-full py-2 bg-gray-100 text-gray-700 text-sm rounded-lg hover:bg-gray-200 transition-colors"
                      >
                        Continue Learning
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup>
import { ref } from 'vue';

// Active tab state
const activeTab = ref('cv');

// Navigation tabs
const tabs = [
  { id: 'learning', name: 'MY LEARNING', icon: 'i-lucide:book-open' },
  { id: 'jobs', name: 'JOBS', icon: 'i-lucide:briefcase' },
  { id: 'cv', name: 'CV', icon: 'i-lucide:file-text' },
];

// Skills
const skills = [
  'Product Management',
  'UX/UI Design',
  'Agile/Scrum',
  'Data Analysis',
  'Strategic Planning',
  'Team Leadership',
  'Stakeholder Management',
  'Market Research',
  'A/B Testing',
  'Wireframing',
  'Prototyping',
];

// Languages
const languages = [
  { name: 'English', level: 'Native', percentage: 100 },
  { name: 'Spanish', level: 'Professional', percentage: 85 },
  { name: 'French', level: 'Intermediate', percentage: 60 },
  { name: 'German', level: 'Basic', percentage: 30 },
];

// CV sections following Harvard recommended structure
const cvSections = [
  {
    title: 'EDUCATION',
    icon: 'i-lucide:graduation-cap',
    items: [
      {
        title: 'Harvard Business School',
        subtitle: 'Master of Business Administration (MBA)',
        date: '2018 - 2020',
        description:
          'Specialized in Product Management and Digital Innovation. Graduated with honors and was selected for the Leadership Fellows program.',
        achievements: [
          'President of the Product Management Club',
          'Winner of the Annual Business Plan Competition',
          'Published research on digital transformation strategies',
        ],
      },
      {
        title: 'Stanford University',
        subtitle: 'Bachelor of Science in Computer Science',
        date: '2014 - 2018',
        description:
          'Minor in Business Administration. Graduated summa cum laude with a 3.95/4.0 GPA.',
        achievements: [
          'Developed a mobile app that won the university innovation award',
          'Teaching Assistant for Introduction to Product Management',
          'Member of the Entrepreneurship Society',
        ],
      },
    ],
  },
  {
    title: 'PROFESSIONAL EXPERIENCE',
    icon: 'i-lucide:briefcase',
    items: [
      {
        title: 'Senior Product Manager',
        subtitle: 'Google, Mountain View, CA',
        date: '2020 - Present',
        description:
          'Lead product strategy and execution for Google Cloud Platform services, focusing on machine learning and data analytics solutions for enterprise customers.',
        achievements: [
          'Launched 3 new product features that increased user engagement by 45%',
          'Led cross-functional team of 15 engineers, designers, and marketers',
          'Developed product roadmap that resulted in $12M additional annual revenue',
          'Improved customer satisfaction scores from 85% to 94% within first year',
        ],
      },
      {
        title: 'Product Manager',
        subtitle: 'Airbnb, San Francisco, CA',
        date: '2018 - 2020',
        description:
          'Managed the host experience platform, focusing on onboarding, listing optimization, and booking management tools.',
        achievements: [
          'Redesigned host dashboard resulting in 30% increase in listing completeness',
          'Implemented A/B testing framework that improved conversion rates by 22%',
          'Collaborated with UX research to conduct user interviews and usability studies',
          'Mentored 5 associate product managers',
        ],
      },
      {
        title: 'Product Management Intern',
        subtitle: 'Microsoft, Redmond, WA',
        date: 'Summer 2017',
        description:
          'Worked with the Office 365 team to improve collaboration features for enterprise customers.',
        achievements: [
          'Conducted competitive analysis that informed product strategy',
          'Created wireframes and prototypes for new collaboration features',
          'Presented product recommendations to senior leadership',
        ],
      },
    ],
  },
  {
    title: 'SKILLS & CERTIFICATIONS',
    icon: 'i-lucide:award',
    items: [
      {
        title: 'Technical Skills',
        subtitle: '',
        date: '',
        description:
          'Product Management (Agile, Scrum, Kanban), Data Analysis (SQL, Python, Tableau), Prototyping (Figma, Sketch), A/B Testing, User Research, Market Analysis, Wireframing, Product Strategy, Roadmapping, Stakeholder Management',
      },
      {
        title: 'Certifications',
        subtitle: '',
        date: '',
        description:
          'Certified Scrum Product Owner (CSPO), Professional Scrum Master I (PSM I), Google Analytics Certification, Product Management Certification (Product School)',
      },
    ],
  },
  {
    title: 'PUBLICATIONS & PRESENTATIONS',
    icon: 'i-lucide:file-text',
    items: [
      {
        title: 'Harvard Business Review',
        subtitle:
          'Author: "The Future of Product Management in AI-Driven Organizations"',
        date: '2022',
        description:
          'Published article examining how artificial intelligence is transforming the role of product managers and strategies for adapting to this shift.',
      },
      {
        title: 'Product Management Conference',
        subtitle:
          'Speaker: "Building Products That Scale: Lessons from Google"',
        date: '2021',
        description:
          'Keynote presentation on architectural and organizational considerations for building products that can scale to millions of users.',
      },
    ],
  },
];

// Jobs data for the JOBS tab
const jobs = [
  {
    title: 'Senior Product Manager',
    company: 'Salesforce',
    location: 'San Francisco, CA (Remote Option)',
    date: 'Posted 2 days ago',
    icon: 'i-lucide:line-chart',
    tags: [
      'Product Management',
      'SaaS',
      'Enterprise',
      'Full-time',
      '$150K-$180K',
    ],
  },
  {
    title: 'Product Manager, AI/ML',
    company: 'Amazon Web Services',
    location: 'Seattle, WA',
    date: 'Posted 1 week ago',
    icon: 'i-lucide:database',
    tags: [
      'AI/ML',
      'Cloud Services',
      'Product Strategy',
      'Full-time',
      '$160K-$200K',
    ],
  },
  {
    title: 'Director of Product',
    company: 'Stripe',
    location: 'Remote',
    date: 'Posted 3 days ago',
    icon: 'i-lucide:zap',
    tags: ['Fintech', 'Leadership', 'Payments', 'Full-time', '$180K-$220K'],
  },
  {
    title: 'Product Manager, Mobile',
    company: 'Netflix',
    location: 'Los Angeles, CA',
    date: 'Posted today',
    icon: 'i-lucide:pen-tool',
    tags: ['Mobile', 'Entertainment', 'Consumer', 'Full-time', '$140K-$170K'],
  },
];

// Courses data for the MY LEARNING tab
const courses = [
  {
    title: 'Advanced Product Management',
    provider: 'Harvard Business School Online',
    duration: '8 weeks',
    level: 'Advanced',
    category: 'Product Management',
    progress: 75,
    students: '2,345',
    icon: 'i-lucide:book-marked',
  },
  {
    title: 'Data Science for Product Managers',
    provider: 'Stanford Online',
    duration: '6 weeks',
    level: 'Intermediate',
    category: 'Data Science',
    progress: 60,
    students: '1,876',
    icon: 'i-lucide:database',
  },
  {
    title: 'UX Research & Design',
    provider: 'Interaction Design Foundation',
    duration: '10 weeks',
    level: 'Intermediate',
    category: 'Design',
    progress: 90,
    students: '3,421',
    icon: 'i-lucide:pen-tool',
  },
  {
    title: 'Product Strategy Masterclass',
    provider: 'Product School',
    duration: '4 weeks',
    level: 'Advanced',
    category: 'Strategy',
    progress: 40,
    students: '1,245',
    icon: 'i-lucide:line-chart',
  },
];
</script>
