'use server'

export const getTestData = async () => {
  // delay for testing purposes
  await new Promise((resolve) => setTimeout(resolve, 1000))

  const serverTimestamp = new Date().getTime()

  const data = [
    {
      id: 1,
      title: 'Test 1',
      description: 'This is a test description',
      serverTimestamp,
    },
    {
      id: 2,
      title: 'Test 2',
      description: 'This is a test description',
      serverTimestamp,
    },
    {
      id: 3,
      title: 'Test 3',
      description: 'This is a test description',
      serverTimestamp,
    },
  ]

  return data
}
