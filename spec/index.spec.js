import Cohorts, { Cohort } from '../src/index.js'

describe('cohorts', () => {
  let cohorts
  beforeEach(() => (cohorts = new Cohorts()))

  it('is an instance of Cohorts', () => {
    expect(cohorts).toBeInstanceOf(Cohorts)
  })

  it('is created with an empty array', () => {
    expect(cohorts.cohorts.length).toBe(0)
  })

  it('can create a new Cohort with the specified name', () => {
    cohorts.createCohort('1')

    expect(cohorts.cohorts[0].name).toBe('1')
    expect(cohorts.cohorts[0]).toBeInstanceOf(Cohort)
  })

  it('can succesfully add a student to a cohort', () => {
    cohorts.createCohort('1')

    cohorts.addStudent('Angus', '1')

    expect(cohorts.cohorts[0].students[0].name).toBe('Angus')
  })
})