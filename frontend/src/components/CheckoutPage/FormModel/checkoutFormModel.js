export default {
  formId: 'checkoutForm',
  formField: {
    firstName: {
      name: 'firstName',
      label: 'Nome completo*',
      requiredErrorMsg: 'O nome completo é obrigatório'
    },
    lastName: {
      name: 'lastName',
      label: 'Last name*',
      requiredErrorMsg: 'O nome completo é obrigatório'
    },
    address1: {
      name: 'address2',
      label: 'Endereço*',
      requiredErrorMsg: 'O Endereço é obrigatório'
    },

    city: {
      name: 'city',
      label: 'Cidade*',
      requiredErrorMsg: 'Cidade é obrigatória'
    },
    state: {
      name: 'state',
      label: 'Estado*',
      requiredErrorMsg: 'Cidade é obrigatória'
    },
    zipcode: {
      name: 'zipcode',
      label: 'CPF/CNPJ*',
      requiredErrorMsg: 'CEP é obrigatório',
      invalidErrorMsg: 'Formato de CEP inválido'
    },
    country: {
      name: 'country',
      label: 'País*',
      requiredErrorMsg: 'País é obrigatório'
    },
    useAddressForPaymentDetails: {
      name: 'useAddressForPaymentDetails',
      label: 'Use este endereço para detalhes de pagamento'
    },
    nameOnCard: {
      name: 'nameOnCard',
      label: 'Títular do Cartão*',
      requiredErrorMsg: 'O nome do cartão é obrigatório'
    },
    cardNumber: {
      name: 'cardNumber',
      label: 'Card number*',
      requiredErrorMsg: 'Número do Cartão é Obrigatório',
      invalidErrorMsg: 'Número do Cartão não é válido'
    },
    expiryDate: {
      name: 'expiryDate',
      label: 'Vencimento*',
      requiredErrorMsg: 'Data de Vencimento Obrigatória',
      invalidErrorMsg: 'Data de vencimento com erro.'
    },
    cvv: {
      name: 'cvv',
      label: 'CVV*',
      requiredErrorMsg: 'CVV é obrigatório',
      invalidErrorMsg: 'CVV inválido.'
    }
  }
};
