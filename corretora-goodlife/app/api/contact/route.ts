import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const data = await request.json();

    // TODO: Implementar validação mais robusta dos dados (ex: com Zod)
    console.log('Dados recebidos do formulário de contato:', data);

    // Simulação de processamento (ex: enviar email, salvar em banco de dados)
    // Aqui você integraria com Nodemailer, um CRM, um banco de dados, etc.
    // Por enquanto, apenas simulamos um sucesso.

    // Simular um pequeno atraso de rede
    await new Promise(resolve => setTimeout(resolve, 1000));

    // Validação simples para demonstração
    if (!data.name || !data.email || !data.subject || !data.message) {
      return NextResponse.json({ message: 'Erro: Todos os campos obrigatórios devem ser preenchidos.' }, { status: 400 });
    }
    if (!/\S+@\S+\.\S+/.test(data.email)) {
        return NextResponse.json({ message: 'Erro: Formato de email inválido.' }, { status: 400 });
    }

    // Se tudo estiver OK (simulação)
    return NextResponse.json({ message: 'Mensagem recebida com sucesso! Entraremos em contato em breve.' }, { status: 200 });

  } catch (error) {
    console.error('Erro ao processar formulário de contato:', error);
    return NextResponse.json({ message: 'Erro interno do servidor ao processar sua mensagem.' }, { status: 500 });
  }
}
