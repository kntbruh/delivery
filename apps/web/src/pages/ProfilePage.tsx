import { Link, useRouterState } from '@tanstack/react-router'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

export function ProfilePage() {
  const pathname = useRouterState({ select: (state) => state.location.pathname })

  return (
    <main className="flex flex-col gap-6 p-6">
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between gap-2">
            <CardTitle>Профиль</CardTitle>
            <Badge variant="secondary">Аккаунт</Badge>
          </div>
          <CardDescription>Настройки пользователя и история заказов</CardDescription>
        </CardHeader>
        <CardContent className="space-y-2 text-sm text-muted-foreground">
          <p>Имя: Гость</p>
          <p>Email: guest@delivery.app</p>
          <p>Текущий путь: {pathname}</p>
        </CardContent>
        <CardFooter>
          <Button variant="outline" render={<Link to="/" />}>
            На главную
          </Button>
        </CardFooter>
      </Card>
    </main>
  )
}
