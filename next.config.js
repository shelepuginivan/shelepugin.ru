/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
}

module.exports = nextConfig


// Injected content via Sentry wizard below

const { withSentryConfig } = require('@sentry/nextjs')

module.exports = withSentryConfig(
	module.exports,
	{
		silent: true,
		org: process.env.SENTRY_ORG,
		project: process.env.SENTRY_PROJECT,
	},
	{
		widenClientFileUpload: true,
		transpileClientSDK: true,
		tunnelRoute: '/monitoring',
		hideSourceMaps: true,
		disableLogger: true,
	}
)
