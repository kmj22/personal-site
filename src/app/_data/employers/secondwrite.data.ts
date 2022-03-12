import {Employer} from '../../_interfaces/employer.interface';

export const SECONDWRITE: Employer = {
  name: 'SecondWrite',
  start_date: new Date(2021, 3),
  description: [
    'SecondWrite is a cybersecurity platform that provides B2B tools for detecting malware.  The SecondWrite AV Scanner uses a unique combination of machine-learning and traditional analysis to achieve a high detection rate for zero-day (brand new) malware while minimizing false positives.',
    'Much like with my time at Giftapart, I have taken on a variety of roles since joining SecondWrite as a fully remote Software Engineer.',
    'My most comfortable tasks involved traditional software development in Python- for example, I refactored a file scanning Python Flask API to use a queue-based architecture, resulting in a more than ten-fold increase in capacity to serve simultaneous requests',
    'In addition, I\'ve also been exposed to some machine learning concepts, such as feature extraction and using ROC curves to choose a threshold for binary classification.  I am responsible for maintaining and retraining our machine learning models to keep our verdicts as accurate as possible.',
    'Perhaps my greatest challenge thus far has been the DevOps part of the job.  In my day to day work, I manage our cloud-based servers and keep our infrastructure running.  I have become familiar with tools such as Jenkins and Ansible, and I have even learned to use many AWS services such as CloudFormation and EC2 as well.',
    'Fortunately, I was able to apply and reinforce the Docker knowledge I had gained at Giftapart.  Moreover, my work with Kubernetes has inspired me to begin studying for the Certified Kubernetes Administrator (CKA) exam, in an attempt to broaden my horizons and make me a more well-rounded developer.',
  ],
  job_title: 'Software Engineer',
  image: 'https://i.imgur.com/LZsZq6b.png',
  url_slug: 'secondwrite'
};
