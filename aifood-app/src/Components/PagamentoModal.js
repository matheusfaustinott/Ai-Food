import React, { useState } from 'react';
import { Modal, Paper, Step, StepLabel, Stepper, TextField } from '@mui/material';
import Button from '@mui/material/Button';
import PhoneIcon from '@mui/icons-material/Phone';
import { Box, FormControl, InputAdornment, InputLabel, MenuItem, OutlinedInput, Select } from '@mui/material';
import axios from 'axios';

const PagamentoModal = ({ open, onClose }) => {
  const [activeStep, setActiveStep] = useState(0);
  const [loading, setLoading] = useState(false);
  const [cep, setCep] = useState('');
  const [bairro, setBairro] = useState('');
  const [rua, setRua] = useState('');
  const [complemento, setComplemento] = useState(''); 
  const [cidade, setCidade] = useState('');
  const [selectedCountry, setSelectedCountry] = useState('+55');
  const [telefone, setTelefone] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('');
  const [showTrocoInput, setShowTrocoInput] = useState(false);
  const [trocoValue, setTrocoValue] = useState('');


  const handleNextStep = () => {
    setActiveStep(activeStep + 1);
  };

  const handlePrevStep = () => {
    setActiveStep(activeStep - 1);
  };

  const handleCepChange = async (event) => {
    const newCep = event.target.value;
    setCep(newCep);

    if (newCep.length === 8) {
      setLoading(true);

      try {
        const response = await axios.get(`https://viacep.com.br/ws/${newCep}/json/`);
        setBairro(response.data.bairro);
        setRua(response.data.logradouro);
        setCidade(response.data.localidade);
        setComplemento(response.data.complemento || '');
      } catch (error) {
        console.error('Erro ao buscar informações de CEP:', error);
      } finally {
        setLoading(false);
      }
    }
  };

  const handleCountryChange = (event) => {
    setSelectedCountry(event.target.value);
  };

  const handlePaymentMethod = (method) => {
    if (method === 'cartao') {
      setPaymentMethod(method);
      setActiveStep(activeStep + 1);
    } else {
      setPaymentMethod(method);
    }
  };
  const handleTrocoButtonClick = () => {
  setShowTrocoInput(true);
  };

  const handleTrocoInputChange = (event) => {
  setTrocoValue(event.target.value);
  };  

  
  const renderStepContent = () => {
    switch (activeStep) {
      case 0:
        return (
          <div>
          <div style={{ marginBottom: '10px' }}>
            <TextField label="CEP" variant="outlined" fullWidth value={cep} onChange={handleCepChange} />
          </div>
          <div style={{ marginBottom: '10px' }}>
            <TextField label="Bairro" variant="outlined" fullWidth value={bairro} disabled={loading} />
          </div>
          <div style={{ marginBottom: '10px' }}>
            <TextField label="Rua" variant="outlined" fullWidth value={rua} disabled={loading} />
          </div>
          <div style={{ marginBottom: '10px' }}>
            <TextField
              label="Complemento"
              variant="outlined"
              fullWidth
              value={complemento}
              onChange={(e) => setComplemento(e.target.value)}
              disabled={loading}
            />
          </div>
          <div>
            <TextField label="Cidade" variant="outlined" fullWidth value={cidade} disabled={loading} />
          </div>
        </div>
        );
      case 1:
        return (
          <div>
            <p>Informe seu telefone para contato:</p>
            <Box display="flex" alignItems="center" gap={1}>
              <FormControl variant="outlined">
                <InputLabel htmlFor="country-select">País</InputLabel>
                <Select
                  value={selectedCountry}
                  onChange={handleCountryChange}
                  label="País"
                  input={<OutlinedInput label="País" id="country-select" />}
                >
                  <MenuItem value="+55">+55 (BR)</MenuItem>
                  {/* ... Outros países ... */}
                </Select>
              </FormControl>
              <TextField
                label="Telefone"
                variant="outlined"
                fullWidth
                value={telefone}
                onChange={(e) => setTelefone(e.target.value)}
                placeholder="(__)_________"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <PhoneIcon />
                    </InputAdornment>
                  ),
                }}
              />
            </Box>
          </div>
        );
        case 2:
            return (
              <div>
                <p>Escolha o método de pagamento:</p>
                <Button variant="outlined" onClick={() => handlePaymentMethod('pix')}>
                  Pix
                </Button>
                <Button variant="outlined" onClick={() => handlePaymentMethod('a-vista')}>
                  À vista
                </Button>
                <Button variant="outlined" onClick={() => handlePaymentMethod('cartao')}>
                  Cartão de Crédito
                </Button>
                {paymentMethod === 'a-vista' && (
                    <div>
                        <p>Deseja troco?</p>
                        <Button variant="outlined" onClick={handleTrocoButtonClick}>
                        Sim
                        </Button>
                        <Button variant="outlined" onClick={() => handlePaymentMethod('a-vista-sem-troco')}>
                        Não
                        </Button>
                        {showTrocoInput && (
                        <div>
                            <TextField
                            label="Troco para quanto?"
                            variant="outlined"
                            fullWidth
                            value={trocoValue}
                            onChange={handleTrocoInputChange}
                            placeholder="R$: 0,00"
                            />
                        </div>
                        )}
                    </div>
                )}
                {paymentMethod === 'pix' && (
                    <div style={{ width: '15%', margin: '0 auto', textAlign: 'center' }}>
                    {loading ? (
                        <p>Carregando...</p>
                    ) : (
                        <>
                        <p>Use o QR Code abaixo para fazer o pagamento via Pix:</p>
                        <img src={`${process.env.PUBLIC_URL}/pix.png`} alt="QR Code" style={{ width: '100%' }} />
                        </>
                    )}
                    </div>
                )}
              </div>
            )
      default:
        return null;
    }
  };

  return (
    <Modal open={open} onClose={onClose} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <Paper style={{ padding: '20px', width: '600px', }} >
        <Stepper activeStep={activeStep}>
          <Step>
            <StepLabel>CEP</StepLabel>
          </Step>
          <Step>
            <StepLabel>Telefone</StepLabel>
          </Step>
          <Step>
            <StepLabel>Método de Pagamento</StepLabel>
          </Step>
        </Stepper>
        <div style={{ marginTop: '20px' }}>{renderStepContent()}</div>
        <div style={{ marginTop: '20px', display: 'flex', justifyContent: 'flex-end' }}>
          {activeStep > 0 && (
            <Button onClick={handlePrevStep}>Voltar</Button>
          )}
          {activeStep < 2 ? (
            <Button onClick={handleNextStep} disabled={loading}>Próximo</Button>
          ) : (
            <Button onClick={onClose}>Fechar</Button>
          )}
        </div>
      </Paper>
    </Modal>
  );
};

export default PagamentoModal;
