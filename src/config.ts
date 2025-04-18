import type {
  LicenseConfig,
  NavBarConfig,
  ProfileConfig,
  SiteConfig,
} from './types/config'
import { LinkPreset } from './types/config'

export const siteConfig: SiteConfig = {
  title: 'KC Lifesteal SMP',
  subtitle: 'The KC Lifesteal SMP Blog',
  lang: 'en',         // 'en', 'zh_CN', 'zh_TW', 'ja', 'ko', 'es', 'th'
  themeColor: {
    hue: 250,         // Default hue for the theme color, from 0 to 360. e.g. red: 0, teal: 200, cyan: 250, pink: 345
    fixed: true,     // Hide the theme color picker for visitors
  },
  banner: {
    enable: true,
    src: 'https://raw.githubusercontent.com/KC-Gaming-12/Temp-Kclssmp/a44b5a25d42707134e44a5a293185e5a5e736b14/images.jpeg',   // Relative to the /src directory. Relative to the /public directory if it starts with '/'
    position: 'center',      // Equivalent to object-position, only supports 'top', 'center', 'bottom'. 'center' by default
    credit: {
      enable: false,         // Display the credit text of the banner image
      text: '',              // Credit text to be displayed
      url: ''                // (Optional) URL link to the original artwork or artist's page
    }
  },
  toc: {
    enable: true,           // Display the table of contents on the right side of the post
    depth: 2                // Maximum heading depth to show in the table, from 1 to 3
  },
  favicon: [    // Leave this array empty to use the default favicon
     {
       src: 'https://www.lifesteal.team/favicon.ico',    // Path of the favicon, relative to the /public directory
       theme: '',              // (Optional) Either 'light' or 'dark', set only if you have different favicons for light and dark mode
       sizes: '',              // (Optional) Size of the favicon, set only if you have favicons of different sizes
     }
  ]
}

export const navBarConfig: NavBarConfig = {
  links: [
    LinkPreset.Home,
    LinkPreset.Archive,
    LinkPreset.About,
    {
      name: 'Discord',
      url: 'https://www.lifesteal.team/Discord',     // Internal links should not include the base path, as it is automatically added
      external: true,                               // Show an external link icon and will open in a new tab
    },
  ],
}

export const profileConfig: ProfileConfig = {
  avatar: 'https://yt3.googleusercontent.com/tBLC-brCc6V_nZPhf5p8z5IGXJYTbti3yIWUwaqqJWm-Hn9j9QAe1s_wgwSfE3K6KF8ayWUMjSM=s160-c-k-c0x00ffffff-no-rj',  // Relative to the /src directory. Relative to the /public directory if it starts with '/'
  name: 'KC Gaming 12',
  bio: 'The KC Lifesteal SMP Owner and Developer!',
  links: [
    {
      name: 'Youtube',
      icon: 'fa6-brands:youtube',       // Visit https://icones.js.org/ for icon codes
                                        // You will need to install the corresponding icon set if it's not already included
                                        // `pnpm add @iconify-json/<icon-set-name>`
      url: 'https://www.youtube.com/@KC_Gaming_12',
    },
    {
      name: 'Discord',
      icon: 'fa6-brands:discord',
      url: 'https://www.lifesteal.team/Discord',
    },
    {
      name: 'KC Lifesteal SMP',
      icon: 'fa6-solid:globe',
      url: 'https://www.lifesteal.team',
    },
  ],
}

export const licenseConfig: LicenseConfig = {
  enable: false,
  name: 'CC BY-NC-SA 4.0',
  url: 'https://creativecommons.org/licenses/by-nc-sa/4.0/',
}
