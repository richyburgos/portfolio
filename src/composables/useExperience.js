export const TECH_INDUSTRY_START_DATE = '2015-03-01'; // Bowen & Bowen IT start date which was first role in the tech industry
export const CAREER_START_DATE = '2016-06-01'; // Speednet start date — first full-time dev role
export const VUE_START_DATE = '2018-06-01';

/**
 * Returns a live "X Years Y Months" breakdown computed from any start date
 * to today. Pass a date string like '2016-06-01'.
 */
export function calculateDuration(startDateString) {
    const now = new Date()
    const start = new Date(startDateString)

    let years = now.getFullYear() - start.getFullYear()
    let months = now.getMonth() - start.getMonth()

    if (months < 0) {
        years -= 1
        months += 12
    }

    const parts = []
    if (years > 0) parts.push(`${years} ${years === 1 ? 'Year' : 'Years'}`)
    if (months > 0) parts.push(`${months} ${months === 1 ? 'Month' : 'Months'}`)

    const full = parts.join(' ') || '0 Months'

    return { years, months, full }
}

/**
 * Total career experience (since CAREER_START_DATE).
 */
export function useExperience() {
    return calculateDuration(CAREER_START_DATE)
}

/**
 * Vue.js-specific experience (since VUE_START_DATE).
 */
export function useVueExperience() {
    return calculateDuration(VUE_START_DATE)
}

/**
 * Total tech industry experience (since TECH_INDUSTRY_START_DATE) — includes
 * Bowen & Bowen IT support work prior to the first dev role.
 */
export function useTechIndustryExperience() {
    return calculateDuration(TECH_INDUSTRY_START_DATE)
}
