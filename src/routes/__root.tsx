import { createRootRoute, Link, Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools'
import Language from '@/components/ui/language'
import { useTranslation } from 'react-i18next'
import Ed from '@/components/ui/stickers/Ed'

const RootLayout = () => {
    const { t } = useTranslation()

    return (
        <>
            <div className="p-2 flex gap-2 justify-between">
                <nav className="flex items-center gap-4">
                    <Link to="/" className="[&.active]:font-bold [&.active]:underline">
                        {t('navigation.home')}
                    </Link>{' '}
                    <Link to="/allProgres" className="[&.active]:font-bold [&.active]:underline">
                        {t('navigation.allProgres')}
                    </Link>
                </nav>
                <div className="flex items-center">
                    <Language />
                </div>
            </div>
            <hr />
            <Outlet />
            {/* <TanStackRouterDevtools /> */}
            <Ed />
        </>
    )
}

export const Route = createRootRoute({ component: RootLayout })