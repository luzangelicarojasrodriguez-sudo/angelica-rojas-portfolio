-- ============================================================
-- Tabla: contacts
-- Ejecutar en: Supabase Dashboard → SQL Editor → New query
-- ============================================================

create table if not exists public.contacts (
  id         bigint        generated always as identity primary key,
  created_at timestamptz   not null default now(),
  name       text          not null,
  email      text          not null,
  subject    text,
  message    text          not null,
  read       boolean       not null default false
);

-- Habilitar Row Level Security (RLS)
alter table public.contacts enable row level security;

-- Política: cualquier usuario (anon) puede INSERT (enviar formulario)
create policy "Permitir envío de mensajes"
  on public.contacts
  for insert
  to anon
  with check (true);

-- Política: solo el owner (service_role) puede SELECT / UPDATE / DELETE
-- El panel de Supabase Studio usa service_role, así que puedes leer los mensajes allí.
create policy "Solo admin puede leer mensajes"
  on public.contacts
  for select
  to service_role
  using (true);
