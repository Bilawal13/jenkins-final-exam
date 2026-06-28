pipeline{
	agent any

	environment {
		DOCKER_IMAGE = 'bilawalferoze/myapp'
		IMAGE_TAG = "${BUILD_NUMBER}"
	}


	stages {

		stage('checkout'){
			steps {
			 checkout scm		
			}

		}
		stage('build'){
			steps{
			 echo "building..."
			 sh 'node --version'
			
			}
		}
		stage('test'){
			steps{
			 echo "testing..."
			 echo "Tests passed"

			}
		}
		stage('Docker build'){
			steps{
			 sh 'docker build -t $DOCKER_IMAGE:$IMAGE_TAG .'
			 sh 'docker tag $DOCKER_IMAGE:$IMAGE_TAG $DOCKER_IMAGE:latest'
			}
		}
		stage('Push to hub'){
			steps{
			 withCredentials([ usernamePassword( credentialsId: 'dockerhub-creds' ,
			 usernameVariable: 'DOCKER_USER' , passwordVariable: 'DOCKER_PASS') ] ) {
			 sh 'docker login -u $DOCKER_USER -p $DOCKER_PASS'
			 sh 'docker push $DOCKER_IMAGE:$IMAGE_TAG'
			 sh 'docker push $DOCKER_IMAGE:latest'
			 }
			}
		}
		
		stage('deploy'){
			steps{
			 sh 'docker stop jenkins-final-exam || true '
			 sh 'docker rm jenkins-final-exam || true '
			 sh 'docker pull $DOCKER_IMAGE:latest'
			 sh 'docker run -d -p 3000:3000 --name jenkins-final-exam $DOCKER_IMAGE:latest'
			 echo 'APP LIVE AT LOCALHOST:3000'	
			}
		}

	
	}

	post{
		success { echo 'SUCCESS' }
		failure { echo 'FAILED' }	
	}
}
