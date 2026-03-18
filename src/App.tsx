import { Navigate, Route, Routes } from 'react-router-dom'
import { PageShell } from './components/PageShell'
import { HomePage } from './pages/Home'
import { PlatformPage } from './pages/Platform'
import { CapabilitiesPage } from './pages/Capabilities'
import { SystemsPage } from './pages/Systems'
import { PublicSystemsCapabilitiesPage } from './pages/PublicSystemsCapabilities'
import { BiologicalVirtualCellPage } from './pages/BiologicalVirtualCell'
import { SecuritySystemsPage } from './pages/SecuritySystems'
import { FinancialSystemsPage } from './pages/FinancialSystems'
import { SupplySystemsPage } from './pages/SupplySystems'
import { TechnologyPage } from './pages/Technology'
import { UseCasesPage } from './pages/UseCases'
import { AboutPage } from './pages/About'

export default function App() {
  return (
    <PageShell>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/platform" element={<PlatformPage />} />
        <Route path="/capabilities" element={<CapabilitiesPage />} />
        <Route path="/systems" element={<SystemsPage />} />
        <Route path="/systems/public" element={<PublicSystemsCapabilitiesPage />} />
        <Route path="/systems/biological" element={<BiologicalVirtualCellPage />} />
        <Route
          path="/systems/biological/virtual-cell"
          element={<Navigate to="/systems/biological" replace />}
        />
        <Route path="/systems/security" element={<SecuritySystemsPage />} />
        <Route path="/systems/financial" element={<FinancialSystemsPage />} />
        <Route path="/systems/supply" element={<SupplySystemsPage />} />
        <Route path="/technology" element={<TechnologyPage />} />
        <Route path="/use-cases" element={<UseCasesPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </PageShell>
  )
}
