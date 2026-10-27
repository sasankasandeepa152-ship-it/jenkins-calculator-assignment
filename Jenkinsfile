pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                bat 'node --version'
                bat 'npm --version'
                bat 'npm run build'
            }
        }

        stage('Test') {
            steps {
                bat 'npm test'
            }

            post {
                always {
                    junit testResults: 'test-results/junit.xml',
                          allowEmptyResults: true
                }
            }
        }

        stage('Archive Artifacts') {
            steps {
                archiveArtifacts artifacts: 'dist/**,test-results/**',
                                 fingerprint: true
            }
        }
    }
}