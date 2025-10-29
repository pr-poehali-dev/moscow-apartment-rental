import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

export default function Index() {
  const [activeSection, setActiveSection] = useState('home');

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
        <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-primary">Moscow Deluxe</h1>
          <div className="hidden md:flex gap-6">
            {['home', 'apartments', 'services', 'location', 'prices', 'booking', 'contacts'].map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className={`text-sm font-medium transition-colors hover:text-accent ${
                  activeSection === section ? 'text-accent' : 'text-foreground'
                }`}
              >
                {section === 'home' && 'Главная'}
                {section === 'apartments' && 'Апартаменты'}
                {section === 'services' && 'Услуги'}
                {section === 'location' && 'Расположение'}
                {section === 'prices' && 'Цены'}
                {section === 'booking' && 'Бронирование'}
                {section === 'contacts' && 'Контакты'}
              </button>
            ))}
          </div>
          <Button onClick={() => scrollToSection('booking')} className="bg-accent hover:bg-accent/90">
            Забронировать
          </Button>
        </nav>
      </header>

      <section id="home" className="pt-24 min-h-screen flex items-center bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <h2 className="text-5xl md:text-6xl font-bold mb-6 text-primary leading-tight">
              Премиальные апартаменты в сердце Москвы
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Роскошные апартаменты с панорамным видом на город. Идеальное сочетание комфорта, стиля и удобного расположения для вашего незабываемого отдыха.
            </p>
            <div className="flex gap-4">
              <Button size="lg" onClick={() => scrollToSection('apartments')} className="bg-accent hover:bg-accent/90">
                Посмотреть апартаменты
              </Button>
              <Button size="lg" variant="outline" onClick={() => scrollToSection('prices')}>
                Узнать цены
              </Button>
            </div>
          </div>
          <div className="animate-fade-in">
            <img
              src="https://cdn.poehali.dev/projects/22905a2e-804d-4986-8aa7-517a3958b12a/files/24ed9717-7bb0-438c-8e7b-6af5ee81dcc3.jpg"
              alt="Luxury apartment living room"
              className="rounded-lg shadow-2xl w-full h-auto"
            />
          </div>
        </div>
      </section>

      <section id="apartments" className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4 text-primary">Наши апартаменты</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Каждый номер оборудован по высшим стандартам с вниманием к каждой детали
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="overflow-hidden hover:shadow-xl transition-shadow">
              <img
                src="https://cdn.poehali.dev/projects/22905a2e-804d-4986-8aa7-517a3958b12a/files/24ed9717-7bb0-438c-8e7b-6af5ee81dcc3.jpg"
                alt="Living room"
                className="w-full h-64 object-cover"
              />
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold mb-3">Гостиная</h3>
                <p className="text-muted-foreground mb-4">
                  Просторная гостиная с панорамными окнами, дизайнерской мебелью и современной техникой
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <Icon name="Check" size={16} className="text-accent" />
                    <span className="text-sm">Smart TV 65"</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon name="Check" size={16} className="text-accent" />
                    <span className="text-sm">Панорамные окна</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon name="Check" size={16} className="text-accent" />
                    <span className="text-sm">Премиум мебель</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="overflow-hidden hover:shadow-xl transition-shadow">
              <img
                src="https://cdn.poehali.dev/projects/22905a2e-804d-4986-8aa7-517a3958b12a/files/05b45085-bfcd-4747-ab8e-abf0955be321.jpg"
                alt="Bedroom"
                className="w-full h-64 object-cover"
              />
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold mb-3">Спальня</h3>
                <p className="text-muted-foreground mb-4">
                  Уютная спальня с king-size кроватью и премиальным постельным бельем для идеального отдыха
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <Icon name="Check" size={16} className="text-accent" />
                    <span className="text-sm">King-size кровать</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon name="Check" size={16} className="text-accent" />
                    <span className="text-sm">Премиальное белье</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon name="Check" size={16} className="text-accent" />
                    <span className="text-sm">Затемняющие шторы</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="overflow-hidden hover:shadow-xl transition-shadow">
              <img
                src="https://cdn.poehali.dev/projects/22905a2e-804d-4986-8aa7-517a3958b12a/files/a25f8694-da00-460e-ba5f-f855e45d7f3c.jpg"
                alt="Kitchen"
                className="w-full h-64 object-cover"
              />
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold mb-3">Кухня</h3>
                <p className="text-muted-foreground mb-4">
                  Полностью оборудованная кухня с современной техникой и всем необходимым для готовки
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <Icon name="Check" size={16} className="text-accent" />
                    <span className="text-sm">Вся техника</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon name="Check" size={16} className="text-accent" />
                    <span className="text-sm">Посуда и приборы</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon name="Check" size={16} className="text-accent" />
                    <span className="text-sm">Кофемашина</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="services" className="py-24 bg-secondary/30">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4 text-primary">Услуги и удобства</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Мы предоставляем полный спектр услуг для вашего комфорта
          </p>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { icon: 'Wifi', title: 'Wi-Fi', desc: 'Высокоскоростной интернет' },
              { icon: 'Car', title: 'Парковка', desc: 'Подземная охраняемая' },
              { icon: 'Coffee', title: 'Завтраки', desc: 'Доставка в номер' },
              { icon: 'Shield', title: 'Безопасность', desc: 'Охрана 24/7' },
              { icon: 'Sparkles', title: 'Уборка', desc: 'Ежедневная уборка' },
              { icon: 'Wind', title: 'Кондиционер', desc: 'Климат-контроль' },
              { icon: 'Droplets', title: 'СПА зона', desc: 'Сауна и джакузи' },
              { icon: 'Dumbbell', title: 'Фитнес', desc: 'Тренажёрный зал' },
            ].map((service, index) => (
              <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow">
                <div className="flex justify-center mb-4">
                  <div className="bg-accent/10 p-4 rounded-full">
                    <Icon name={service.icon} size={32} className="text-accent" />
                  </div>
                </div>
                <h3 className="font-bold text-lg mb-2">{service.title}</h3>
                <p className="text-sm text-muted-foreground">{service.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="location" className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4 text-primary">Расположение</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Центр Москвы - все достопримечательности в шаговой доступности
          </p>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="bg-secondary/30 rounded-lg p-8 h-96 flex items-center justify-center">
                <div className="text-center">
                  <Icon name="MapPin" size={64} className="mx-auto mb-4 text-accent" />
                  <p className="text-lg font-semibold">Москва, Центральный район</p>
                  <p className="text-muted-foreground mt-2">Координаты на карте</p>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="bg-accent/10 p-3 rounded-lg h-fit">
                  <Icon name="Building2" size={24} className="text-accent" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">До Красной площади</h3>
                  <p className="text-muted-foreground">5 минут на автомобиле</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="bg-accent/10 p-3 rounded-lg h-fit">
                  <Icon name="Landmark" size={24} className="text-accent" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">До Кремля</h3>
                  <p className="text-muted-foreground">7 минут на автомобиле</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="bg-accent/10 p-3 rounded-lg h-fit">
                  <Icon name="ShoppingBag" size={24} className="text-accent" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">ТЦ и рестораны</h3>
                  <p className="text-muted-foreground">В шаговой доступности</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="bg-accent/10 p-3 rounded-lg h-fit">
                  <Icon name="Train" size={24} className="text-accent" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">Метро</h3>
                  <p className="text-muted-foreground">2 минуты пешком</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="prices" className="py-24 bg-primary text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4">Прозрачные цены</h2>
          <p className="text-center text-white/80 mb-12 max-w-2xl mx-auto">
            Без скрытых платежей. Всё включено в стоимость
          </p>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="bg-white text-primary p-8 hover:scale-105 transition-transform">
              <div className="text-center">
                <h3 className="text-2xl font-bold mb-2">Будни</h3>
                <div className="text-5xl font-bold mb-4 text-accent">12 000 ₽</div>
                <p className="text-muted-foreground mb-6">за сутки</p>
                <ul className="space-y-3 text-left mb-6">
                  <li className="flex items-center gap-2">
                    <Icon name="Check" size={16} className="text-accent" />
                    <span className="text-sm">Все услуги включены</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon name="Check" size={16} className="text-accent" />
                    <span className="text-sm">Уборка ежедневно</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon name="Check" size={16} className="text-accent" />
                    <span className="text-sm">Парковка бесплатно</span>
                  </li>
                </ul>
                <Button className="w-full bg-accent hover:bg-accent/90" onClick={() => scrollToSection('booking')}>
                  Забронировать
                </Button>
              </div>
            </Card>

            <Card className="bg-accent text-white p-8 scale-105 shadow-2xl relative">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary px-4 py-1 rounded-full text-sm font-bold">
                Популярно
              </div>
              <div className="text-center">
                <h3 className="text-2xl font-bold mb-2">Выходные</h3>
                <div className="text-5xl font-bold mb-4">15 000 ₽</div>
                <p className="text-white/80 mb-6">за сутки</p>
                <ul className="space-y-3 text-left mb-6">
                  <li className="flex items-center gap-2">
                    <Icon name="Check" size={16} />
                    <span className="text-sm">Все услуги включены</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon name="Check" size={16} />
                    <span className="text-sm">Уборка ежедневно</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon name="Check" size={16} />
                    <span className="text-sm">Парковка бесплатно</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon name="Check" size={16} />
                    <span className="text-sm">Приветственный набор</span>
                  </li>
                </ul>
                <Button className="w-full bg-primary hover:bg-primary/90" onClick={() => scrollToSection('booking')}>
                  Забронировать
                </Button>
              </div>
            </Card>

            <Card className="bg-white text-primary p-8 hover:scale-105 transition-transform">
              <div className="text-center">
                <h3 className="text-2xl font-bold mb-2">Долгосрочно</h3>
                <div className="text-5xl font-bold mb-4 text-accent">10 000 ₽</div>
                <p className="text-muted-foreground mb-6">за сутки (от 7 дней)</p>
                <ul className="space-y-3 text-left mb-6">
                  <li className="flex items-center gap-2">
                    <Icon name="Check" size={16} className="text-accent" />
                    <span className="text-sm">Все услуги включены</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon name="Check" size={16} className="text-accent" />
                    <span className="text-sm">Уборка 2 раза в неделю</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon name="Check" size={16} className="text-accent" />
                    <span className="text-sm">Скидка 15%</span>
                  </li>
                </ul>
                <Button className="w-full bg-accent hover:bg-accent/90" onClick={() => scrollToSection('booking')}>
                  Забронировать
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <section id="booking" className="py-24 bg-secondary/30">
        <div className="container mx-auto px-4 max-w-2xl">
          <h2 className="text-4xl font-bold text-center mb-4 text-primary">Бронирование</h2>
          <p className="text-center text-muted-foreground mb-12">
            Заполните форму, и мы свяжемся с вами в течение 15 минут
          </p>
          <Card className="p-8">
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Ваше имя</label>
                  <Input placeholder="Иван" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Телефон</label>
                  <Input placeholder="+7 (999) 123-45-67" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <Input type="email" placeholder="example@mail.com" />
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Дата заезда</label>
                  <Input type="date" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Дата выезда</label>
                  <Input type="date" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Количество гостей</label>
                <Input type="number" placeholder="2" min="1" max="6" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Комментарий</label>
                <Textarea placeholder="Особые пожелания..." rows={4} />
              </div>
              <Button type="submit" className="w-full bg-accent hover:bg-accent/90" size="lg">
                Отправить заявку
              </Button>
              <p className="text-sm text-center text-muted-foreground">
                Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
              </p>
            </form>
          </Card>
        </div>
      </section>

      <section id="contacts" className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4 text-primary">Контакты</h2>
          <p className="text-center text-muted-foreground mb-12">
            Мы всегда на связи и готовы ответить на ваши вопросы
          </p>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <div className="bg-accent/10 p-4 rounded-full w-fit mx-auto mb-4">
                <Icon name="Phone" size={32} className="text-accent" />
              </div>
              <h3 className="font-bold text-lg mb-2">Телефон</h3>
              <p className="text-muted-foreground">+7 (495) 123-45-67</p>
              <p className="text-sm text-muted-foreground mt-1">Круглосуточно</p>
            </Card>

            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <div className="bg-accent/10 p-4 rounded-full w-fit mx-auto mb-4">
                <Icon name="Mail" size={32} className="text-accent" />
              </div>
              <h3 className="font-bold text-lg mb-2">Email</h3>
              <p className="text-muted-foreground">info@moscowdeluxe.ru</p>
              <p className="text-sm text-muted-foreground mt-1">Ответим в течение часа</p>
            </Card>

            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <div className="bg-accent/10 p-4 rounded-full w-fit mx-auto mb-4">
                <Icon name="MapPin" size={32} className="text-accent" />
              </div>
              <h3 className="font-bold text-lg mb-2">Адрес</h3>
              <p className="text-muted-foreground">г. Москва, Центральный округ</p>
              <p className="text-sm text-muted-foreground mt-1">Точный адрес после бронирования</p>
            </Card>
          </div>
        </div>
      </section>

      <footer className="bg-primary text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="font-bold text-xl mb-4">Moscow Deluxe</h3>
              <p className="text-white/80 text-sm">
                Премиальные апартаменты для посуточной аренды в центре Москвы
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Навигация</h4>
              <ul className="space-y-2 text-sm text-white/80">
                <li><button onClick={() => scrollToSection('apartments')} className="hover:text-white transition-colors">Апартаменты</button></li>
                <li><button onClick={() => scrollToSection('services')} className="hover:text-white transition-colors">Услуги</button></li>
                <li><button onClick={() => scrollToSection('prices')} className="hover:text-white transition-colors">Цены</button></li>
                <li><button onClick={() => scrollToSection('booking')} className="hover:text-white transition-colors">Бронирование</button></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Контакты</h4>
              <ul className="space-y-2 text-sm text-white/80">
                <li>+7 (495) 123-45-67</li>
                <li>info@moscowdeluxe.ru</li>
                <li>Москва, Центральный округ</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Социальные сети</h4>
              <div className="flex gap-4">
                <div className="bg-white/10 p-2 rounded-full hover:bg-white/20 transition-colors cursor-pointer">
                  <Icon name="Instagram" size={20} />
                </div>
                <div className="bg-white/10 p-2 rounded-full hover:bg-white/20 transition-colors cursor-pointer">
                  <Icon name="MessageCircle" size={20} />
                </div>
                <div className="bg-white/10 p-2 rounded-full hover:bg-white/20 transition-colors cursor-pointer">
                  <Icon name="Mail" size={20} />
                </div>
              </div>
            </div>
          </div>
          <div className="border-t border-white/20 pt-8 text-center text-sm text-white/60">
            <p>© 2024 Moscow Deluxe Apartments. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
