import { describe, expect, test } from 'vitest'
import { $fetch, setup } from '@nuxt/test-utils'

describe('My test', async () => {
  await setup(
    {
      // test context options
    },
  )

  test('index page should be work3', async () => {
    const html = await $fetch('/')
    expect(html).toMatch('Welcome to Nuxt!')
  })
})
