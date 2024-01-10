import { ThemingProps } from '@chakra-ui/react'
import { Chain } from '@wagmi/core'

export const SITE_NAME = 'W3HC Next.js Boilerplate'
export const SITE_DESCRIPTION = 'A variant of Nexth boilerplate for hackathons and quick prototyping.' // Your description should be between 55 and 200 characters long, with a maximum of 300.
export const SITE_URL = 'w3hc-nextjs-boilerplate.netlify.app'

export const THEME_INITIAL_COLOR = 'system'
export const THEME_COLOR_SCHEME: ThemingProps['colorScheme'] = 'gray'
export const THEME_CONFIG = {
  initialColorMode: THEME_INITIAL_COLOR,
}

export const SOCIAL_TWITTER = 'w3hc8'
export const SOCIAL_GITHUB = 'w3hc/w3hc-nextjs-boilerplate'

export const artheraTestnet: Chain = {
  id: 10243,
  name: 'Arthera Testnet',
  network: 'artheraTestnet',
  nativeCurrency: {
    decimals: 18,
    name: 'AA',
    symbol: 'AA',
  },
  rpcUrls: {
    public: { http: ['https://rpc-test.arthera.net'] },
    default: { http: ['https://rpc-test.arthera.net'] },
  },
  blockExplorers: {
    etherscan: { name: 'Arthera Testnet Explorer', url: 'https://explorer-test.arthera.net' },
    default: { name: 'Arthera Testnet Explorer', url: 'https://explorer-test.arthera.net' },
  },
} as const satisfies Chain

export const ETH_CHAINS = [artheraTestnet]

export const SERVER_SESSION_SETTINGS = {
  cookieName: SITE_NAME,
  password: process.env.SESSION_PASSWORD ?? 'UPDATE_TO_complex_password_at_least_32_characters_long',
  cookieOptions: {
    secure: process.env.NODE_ENV === 'production',
  },
}
