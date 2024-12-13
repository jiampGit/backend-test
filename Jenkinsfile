pipeline{
    agent any
    stages{
        stage("Instalación de dependencias"){
            agent {
                docker {
                    image 'node:22-alpine'
                    reuseNode true
                }
            }
            stages{
                stage ("Build - instalación dependencias"){
                    steps{
                        sh 'npm install'
                    }
                }
                stage("Testing"){
                    steps{
                        sh 'npm run test'
                    }
                }
                stage("Build del proyecto"){
                    steps{
                        sh 'npm run build'
                    }
                }
            }            
        }
        stage("Quality Assurance"){
            agent {
                docker {
                    label 'contenedores'
                    image 'sonarsource/sonar-scanner-cli'
                    args '--network=devops-infra_default'
                    reuseNode true
                }
            }
            stages{
                stage("Quality assurance - Sonarqube"){
                    steps{
                        withSonarQubeEnv('sonarqube'){
                            sh 'sonar-scanner'
                        }
                    }
                }
                stage("Quality assurance - Puerta Calidad"){
                    steps{
                        script{
                            timeout(time: 3, unit: 'MINUTES'){
                                def qg = waitForQualityGate()
                                if (qg.status != 'OK'){
                                    error "Pipeline abortado debido a falla de puerta de calidad: ${qg.status}"
                                }
                            }                            
                        }
                    }
                }
            }
        }
        stage("imagen a nexus"){
            steps{
                script(){
                    docker.withRegistry("http://localhost:8082", "registry"){
                        sh 'docker build -t backend-test .'
                        sh 'docker tag backend-test localhost:8082/backend-test'
                        sh 'docker tag backend-test localhost:8082/backend-test'
                    }
                }                
            }
        }     
    }
}
