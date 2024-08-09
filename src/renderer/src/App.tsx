import { HashRouter, Route, Routes } from 'react-router-dom'

import { HomePage } from './pages/home/ui'

import { SettingsPage } from './pages/settings/ui'

import '@renderer/shared/ui/styles/global.scss'

function App(): JSX.Element {
  // const ipcHandle = (): void => window.electron.ipcRenderer.send('ping')

  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/settings" element={<SettingsPage />} />
      </Routes>
    </HashRouter>
  )
}

export default App
