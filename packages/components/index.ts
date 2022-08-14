export * from './components'
import components from './components'
import type { App, Plugin } from 'vue'

const install = (app: App): void => {
  const _components = components as Record<string, Plugin>
  for (const key in _components) {
    const item = _components[key]
    app.use(item)
  }
}

export default install
