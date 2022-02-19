export interface NavI {
  link: string,
  path: string,
  id: number
}

interface SlideI {
  id: number
  title: string
  text: string
  author: string
}

export interface AboutUsI {
  title: string
  img: string
  sliderData: SlideI[]
}

export interface StatI {
  img: string,
  count: string,
  text: string,
  id: number
}

interface TeamMemberI {
  name: string
  id: number
  prof: string
  img: string
  text: string
}

export interface TeamI {
  title: string
  teamList: TeamMemberI[]
}

interface ServiceI {
  title: string
  img: string
  id: number
}

export interface ServicesI {
  title: string
  servicesList: ServiceI[]
}

interface TestimonialI {
  author: string
  text: string
  img: string
  id: number
}

export interface TestimonialsI {
  title: string
  testimonialsList: TestimonialI[]
}

interface FaqItemI {
  title: string
  text: string
  id: number
}

export interface FaqI {
  title: string
  faqList: FaqItemI[]
}

export interface FeedbackFormI {
  title: string
  formPlaceholders: {
    namePlaceholder: string
    phonePlaceholder: string
    emailPlaceholder: string
    messagePlaceholder: string
  },
  submitButtonText: string
  successAlertText: string
}


export interface FooterI {
  contacts: {
    title: string
    contactsList: {
      phone: string
      email: string
      location: string
    }
  }
  copyright: string
}



