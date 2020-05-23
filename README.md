# Animated Dropdown Menu

This is just an example of an animated dropdown menu with nested submenus and animation transition between submenus.
<p align="center">
<img src="./drop-down.gif" />
</p>
It's written in Typescript and missing just a few types related to **react-transition-group** due to lack of documentation

## How to use?
If you want to checkout, just clone this repo and try it out:

```bash
$ yarn install

$ yarn start
```

## Instruction
Only the last menu (the right one) has submenu content, and only the submenus "Settings" and "Animals" have a submenu.

All the other menu items are there just to demonstrate the height transition animation.

## Copyright
This project is under MIT license.

## Contact
Developed and maintained by [@gusflopes](https://github.com/gusflopes).



## Menu

Dashboard
Lawfirm
  > Resumo
  > Contas e Extratos
  > Transações Recorrentes
  > Configurações
    > Empresa
    > Categorias
    > Centros de Custo
    > Cobrança via Boleto
    > Emissão de NFSe
Clientes
  > Novo Cliente
  > Listar Clientes
  > Agendar Recebimento: Popup {Recorrente, Parcelamento, Automatizar Cobrança, Automatizar Nota Fiscal}
  > Receber: Tela {Gerenciar Agendamentos, Novo Recebimento não agendado, Importar Lançamentos Planilha}
  > Cobrança: Boleto, Nota de Débito
  > Notas Fiscais
Fornecedores
  > Listar Fornecedores
  > Agendar Pagamento: Popup {Reembolsável, Recorrente, Parcelas, *continuar agendando}
  > Pagamento e Baixa: Tela {Listagem Pagamentos em aberto, Selecionar Pgtos em Aberto(informar Data e Conta, checkbox agendamentos)}
Colaboradores
  > Sócios
  > Advogados
  > Estagiários
  > Funcionários
  > Prestadores de Serviço
Alvará
  ** sistema de gestão de alvará
Relatórios
  > Painel de Acompanhamento (Realizado, Orçado X Realizado, Agendado X Realizado) - anual
  > Fluxo de Caixa (Saldo Diário, Agendamentos vencidos, Agendamentos Futuros) - trimestral (vencidos e futuros são todos)
  > Contas a Receber (filtros: Vencimento (start, end), Cliente, Desc/Valor/Ref, Categoria )
  > Contas Recebidas (filtros: idem)
  > Contas a Pagar (filtros: idem)
  > Contas a Receber (filtros: idem)