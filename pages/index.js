import { Box, Button, Text, TextField, Image } from '@skynexui/components';
import React from 'react';
import { useRouter } from 'next/router';
import appConfig from '../config.json';

function Titulo(props) {
    const Tag = props.tag || 'h1';
    return (
        <>
            <Tag>{props.children}</Tag>
            <style jsx>{`
            ${Tag} {
                color: ${appConfig.theme.colors.neutrals['000']};
                font-size: 24px;
                font-weight: 600;
            }
            `}</style>
        </>
    );
}

// Componente React
//function HomePage() {
// JSX
//    return (
//        <div>
//            <GlobalStyle/>
//            <Titulo tag="h2">Boas vindas de volta!</Titulo>
//            <h2>Discord - Vinicius de Assis </h2>
//        </div>
//    );
//  }

//  export default HomePage

export default function PaginaInicial() {
    
    //const username = 'ViniciusdeAssis';
    const [username, setUsername] = React.useState('ViniciusdeAssis');
    const roteamento = useRouter();

    return (
        <>
            <Box
                styleSheet={{
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center',
                    backgroundColor: appConfig.theme.colors.primary[600],
                    backgroundImage: 'url(https://images.unsplash.com/photo-1515651571008-95427bed8e0b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1197&q=80)',
                    backgroundRepeat: 'no-repeat', 
                    backgroundSize: 'cover', 
                    backgroundBlendMode: 'multiply',
                    
                    
                }}
            >
                <Box
                    styleSheet={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        flexDirection: {
                            xs: 'column',
                            sm: 'row',
                        },
                        width: '100%', 
                        maxWidth: '700px',
                        borderRadius: '20px', 
                        padding: '42px', 
                        margin: '16px',
                        boxShadow: "35px 35px 20px 30px rgba(0, 0, 0, .8)",
                         
                    }}
                >
                    {/* Formulário */}
                    <Box
                        as="form"
                        onSubmit={function (infosDoEvento) {
                            infosDoEvento.preventDefault();
                            console.log('Alguém submeteu o form');
                            roteamento.push(`/chat?username=${username}`);
                            // window.location.href = '/chat';
                        }}
                        styleSheet={{
                            display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
                            width: { xs: '100%', sm: '50%' }, textAlign: 'center', marginBottom: '32px',
                            
                            
                        }}
                    >
                        <Titulo tag="h2">Bem vindo @ !</Titulo>
                        <Text variant="body3" styleSheet={{ marginBottom: '32px', color: appConfig.theme.colors.neutrals[300] }}>
                            {appConfig.name}
                        </Text>
                         <TextField 
                            value={username}
                            onChange={function (event) {
                                console.log('usuario digitou', event.target.value);
                                //onde ta o valor?
                                const valor = event.target.value;
                                // Trocar o valor da variavel
                                // Através do React e avise quem precisa
                                setUsername(valor);
                            }}   
                            fullWidth
                            textFieldColors={{
                                neutral: {
                                    textColor: appConfig.theme.colors.neutrals[200],
                                    mainColor: appConfig.theme.colors.neutrals[900],
                                    mainColorHighlight: appConfig.theme.colors.primary[500],
                                    backgroundColor: appConfig.theme.colors.neutrals[800],
                                    
                                },
                            }}
                        /> 
                        <Button
                            type='submit'
                            label='Entrar'
                            fullWidth
                            buttonColors={{
                                contrastColor: appConfig.theme.colors.neutrals["000"],
                                mainColor: appConfig.theme.colors.primary[400],
                                mainColorLight: appConfig.theme.colors.primary[400],
                                mainColorStrong: appConfig.theme.colors.primary[700],
                            }}
                        />
                    </Box>
                    {/* Formulário */}


                    {/* Photo Area */}
                    <Box
                        styleSheet={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            maxWidth: '200px',
                            padding: '16px',
                            backgroundColor: appConfig.theme.colors.primary[400],
                            border: '1px solid',
                            borderColor: appConfig.theme.colors.primary[400],
                            borderRadius: '10px',
                            flex: 1,
                            minHeight: '240px',
                        }}
                    >
                        <Image
                            styleSheet={{
                                borderRadius: '50%',
                                marginBottom: '16px',
                            }}
                            src={`https://github.com/${username}.png`}
                        />
                        <Text
                            variant="body4"
                            styleSheet={{
                                color: appConfig.theme.colors.primary[300],
                                backgroundColor: appConfig.theme.colors.primary[600],
                                padding: '3px 10px',
                                borderRadius: '1000px'
                            }}
                        >
                            {username}
                        </Text>
                    </Box>
                    {/* Photo Area */}
                </Box>
            </Box>
        </>
    );
}