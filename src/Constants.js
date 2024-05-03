

import parthe from './Images/parthe.jpg'
import bharath from './Images/bharath.png'
import abhishek from './Images/abhisheksinha.jpg'
import jp from './Images/jp.jpg'
import aditya from './Images/Aditya_pic_NY.jpeg'
import avishek from './Images/avhishek_lp.png'
import krishna from './Images/krishna.jpg'
import jk from './Images/JK.jpeg'
import nikil from './Images/nikil.jpg'
import borkar from './Images/borkar.png'

export const speakers = [
    {
        name: "Abhishek Sinha",
        imageUrl: abhishek,
        link: "https://www.tifr.res.in/~abhishek.sinha/",
        bio: "Abhishek Sinha is currently a faculty member in the School of Technology and Computer Science at the Tata Institute of Fundamental Research, Mumbai, India.",
        college: "TIFR"
    },
    {
        name: "Aditya Gopalan",
        imageUrl: aditya,
        link: "https://ece.iisc.ac.in/~aditya/",
        bio: "Aditya Gopalan is an Associate Professor at the Indian Institute of Science, Bengaluru, in the dept. of Electrical Communication Engineering (ECE). He received the Ph.D. degree in electrical engineering from The University of Texas at Austin, and followed it up with a postdoc at the Technion-Israel Institute of Technology. His research interests lie in statistical learning, with a focus on online and reinforcement learning, optimization and control, and statistical inference. He served as an editor of the IEEE/ACM Transactions on Networking, and is an Associate Fellow of the Indian National Science Academy. ",
        college: "IISc"
    },
    {
        name: "Avhishek Chatterjee",
        imageUrl: avishek,
        link: "https://www.ee.iitm.ac.in/faculty/profile/avhishek",
        bio: "Avhishek Chatterjee is an assistant professor in the Department of Electrical Engineering at the Indian Institute of Technology Madras. He received BE from the Jadavpur University, ME from the Indian Institute of Science Bangalore and PhD from The University of Texas at Austin, and was a postdoctoral research associate at the University of Illinois at Urbana-Champaign. His research interest lies in stochastic and information networks with applications in  classical and quantum information networks and human-centric networks.",
        college: "IIT Madras"
    },
    {
        name: "B. N. Bharath",
        imageUrl: bharath,
        link: "https://bharathbettagere.github.io/mywebpage/",
        bio: "B. N. Bharath received the B.E. degree in Electrical and Electronics Engineering from the B.M.S. College of Engineering, Bengaluru, in 2005, and the Ph.D. degree from the Electrical Communication Engineering (ECE) Department, Indian Institute of Science (IISc), Bengaluru in 2013.",
        college: "IIT Dharwad"
    },
    {
        name: "Jayakrishnan U. Nair",
        imageUrl: jk,
        link: "https://www.ee.iitb.ac.in/~jayakrishnan.nair/",
        bio: "Jayakrishnan Nair is an Associate Professor of Electrical Engineering at IIT Bombay. His research draws on tools from queueing theory, applied probability, game theory, and control theory to address performance evaluation and design issues in networks, service systems, and smart power grids.",
        college: "IIT Bombay"
    },
    {
        name: "Jaya Prakash Varma Champati",
        imageUrl: jp,
        link: "https://networks.imdea.org/team/imdea-networks-team/people/jaya-prakash-varma-champati/",
        bio: "Jaya Prakash Champati is an Assistant Professor at IMDEA Networks Institute, where he leads the Edge Networks group.",
        college: "IMDEA Networks Institute"
    },
    {
        name: "Krishna Jagannathan",
        imageUrl: krishna,
        link: "https://www.ee.iitm.ac.in/~krishnaj/",
        bio: " Krishna Jagannathan obtained his B.Tech. in Electrical Engineering from IIT Madras in 2004, and the S.M. and Ph.D. degrees in Electrical Engineering and Computer Science from the Massachusetts Institute of Technology (MIT) in 2006 and 2010 respectively. During 2010-2011, he was a visiting post-doctoral scholar in Computing and Mathematical Sciences at Caltech, and an off-campus post-doctoral fellow at MIT. Since November 2011, he has been with the Department of Electrical Engineering, IIT Madras, where he is currently a professor. His research interests lie in the stochastic modeling and analysis of communication networks, information theory, and queuing theory.",
        college: "IIT Madras"
    },
    {
        name: "Nikhil Karamchandani",
        imageUrl: nikil,
        link: "https://sites.google.com/site/nikhilkaram/home",
        bio: "Nikhil Karamchandani is an Associate Professor with the Department of Electrical Engineering, IIT Bombay. His research interests include networks, information theory, and online learning. ",
        college: "IIT Bombay"
    },
    {
        name: "Parthe Pandit",
        imageUrl: parthe,
        link: "https://parthe.github.io/",
        bio: "Parthe is a faculty member at C-MInDS. He got his PhD from UCLA and was a postdoc at UCSD.",
        college: "IIT Bombay"
    },
    {
        name: "Vivek S. Borkar",
        imageUrl: borkar,
        link: "https://www.ee.iitb.ac.in/web/people/vivek-shripad-borkar/",
        bio: "Vivek S. Borkar received the B.Tech. degree in electrical engineering from the Indian Institute of Technology Bombay, Bombay, India, in 1976, the M.S. degree in systems and control engineering from Case Western Reserve University, Cleveland, OH, USA, in 1977, and the Ph.D. degree in electrical engineering and computer science from the University of California at Berkeley, Berkeley, CA, USA, in 1980. He has held regular positions with the TIFR Centre for Applicable Mathematics, Indian Institute of Science, Bengaluru, India, Tata Institute of Fundamental Research, Mumbai, India, and Indian Institute of Technology Bombay. He is currently an Emeritus Fellow in the latter. He is a Fellow of the American Mathematical Society, The World Academy of Sciences, and various science and engineering academies in India. His research interests include control of Markov processes, stochastic approximation algorithms, and reinforcement learning.",
        college: "IIT Bombay"
    },



];
export const events = [
    {
        time: "9:30 - 9:50",
        speaker: "Registration"
    },
    {
        time: "9:50 - 10:00",
        speaker: "Opening Remarks"
    },
    {
        time: "10:00 - 10:30",
        speaker: "Aditya Gopalan",
        title:"Bad Values but Good Behaviour: Learning Optimal Policies in Highly Misspecified Decision Problems",
        abstract:"Parametric, feature-based reward models are employed by a variety of algorithms in decision-making settings such as bandits and Markov decision processes (MDPs). The typical assumption under which the algorithms are analysed is realizability, i.e., that the true values of actions are perfectly explained by some parametric model in the class. We are, however, interested in the more realistic situation where the true values are (significantly) misspecified with respect to the model class. For parameterized bandits, contextual bandits and MDPs, we identify structural conditions, depending on the problem instance and model class, under which basic algorithms such as $\\epsilon$-greedy, LinUCB and fitted Q-learning provably learn optimal policies under even highly misspecified models. This is in contrast to existing worst-case results for misspecified bandits which show regret bounds that scale linearly with time, and shows that there can be a nontrivially large set of bandit instances that are robust to misspecification."
    },
    {
        time: "10:30 - 11:00",
        speaker: "Avhishek Chatterjee",
        title:"Noise Imposed Limitations of Quantum Computation",
        abstract:"There is a growing interest in quantum computation due to the promise it makes in an ideal scenario. On the other hand, quantum computation is perceived by some as a hype, due to the large gap between the practice and the promise. The truth will  unfold in time only if we have a clear understanding of the gap between theory and practice, which is caused by the inevitable presence of noise in all practical quantum systems. The theory of quantum fault-tolerance was developed for finding ways to bridge this gap. In this talk, I shall discuss some unavoidable limitations imposed by noise on practical quantum computation circuits despite the best fault-tolerant schemes. A part of this talk would be our non-asymptotic converse bounds for gate based quantum computation circuits under general noise model. These bounds were obtained by treating noisy quantum circuits as  stochastic (quantum) information networks and by establishing a connection between quantum computation and communication. "
    },
    {
        time: "11:00 - 11:30",
        speaker: "B.N.Bharath",
        title: "Generalization of FedAvg Under Constrained Polyak-Łojasiewicz Conditions",
        abstract: "This talk focusses on the generalization along with convergence guarantees of the widely used FedAvg algorithm for solving Federated Learning (FL) problems. We prove the generalization bound by handling the optimization error and the Rademacher complexity. Towards handling optimization error, we will look at a new constrained Polyak-Łojasiewicz (PL) type conditions on the (local) loss functions that ensure existence of a global optimal to which the FedAvg algorithms converge linearly after $\\mathcal{O}(\\log(1/\\epsilon))$ rounds of communication, where $\\epsilon$ is the desired optimality gap. Importantly, we demonstrate that a class of single hidden layer neural networks satisfy the proposed conditions that are required to establish the linear convergence of FedAvg as long as $m > nK d$ , where $m$ is the number of neurons in the hidden layer, $n$ is the number of samples at each client, $K$ is the number of clients, and d is the feature dimension. We also bound the Rademacher Complexity for this class of neural networks using the fact that the neural network parameters are constrained to a neighbourhood around the initialization. We observe Rademacher Complexity decreasing at a rate of $\\mathcal{O}(1/\\sqrt{n})$ while the generalization error of FedAvg decreases at the rate of $\\mathcal{O}(1/\\sqrt{n})$."   },
    {
        time: "11:30 - 11:50",
        speaker: "Coffee Break"
    },
    {
        time: "11:50 - 12:20",
        speaker: "Parthe Pandit",
        title: "Fast and scalable training of kernel methods",
        abstract: "In machine learning, kernel machines can often perform similarly or better than deep neural networks (DNNs) on small datasets. There has been a renewed interest in kernel machines due to the discovery of their equivalence to wide neural networks in certain regimes. However, a key feature of DNNs is their ability to scale the model size and training data size independently, whereas in traditional kernel machines model size is tied to data size. Because of this coupling, scaling kernel machines to large data has been computationally challenging. In this paper, we provide a way forward for constructing large-scale *general kernel models*, which are a generalization of kernel machines that decouples the model and training data, and allows training on arbitrarily large datasets. We also provide a fast scalable algorithm to train general kernel models with large number of centers."
    },
    
    {
        time: "12:20 - 12:50",
        speaker: "Krishna Jagannathan",
        title: "Classical Bandits Approaches for Quantum Entanglement Detection",
        abstract: "Entanglement is a key property of quantum states that acts as a resource for a wide range of tasks in quantum information and computing. Detecting entanglement in an unknown quantum state is an important problem, both conceptually and practically. Extensive research on entanglement detection has led to a no-go theorem for arbitrary quantum states, proving the insufficiency of ${non{\\text -}adaptive \\ single{\\text-}copy \\ measurements}$ alone, thus necessitating recourse to full state tomography (FST). Our present work reveals that the problem of entanglement detection becomes more tractable when considering certain $\{structured}$ classes of quantum states, say $\\mathcal{H}.$ Specifically, we consider a set of $K$ quantum states derived from $\\mathcal{H}$, where $m \\leq K$ states are potentially entangled ($m$ being unknown). We propose a method for detecting entanglement in these structured states through non-adaptive single-copy measurements, without explicit FST. Our approach integrates measurements of the unknown states using a special set of POVMs, and then applying established techniques from classical multi-armed bandit literature on the measurement outcomes.  We also implement and demonstrate empirically the feasibility of the proposed method for some relevant classes $\\mathcal H$. More broadly, this work highlights the potential for employing classical machine learning algorithms for quantum entanglement detection."
    },
    {
        time: "12:50 - 14:00",
        speaker: "Lunch"
    },
    {
        time: "14:00 - 14:30",
        speaker: "Jayakrishnan U. Nair",
        title:"Unsupervised Crowdsourcing with Accuracy and Cost Guarantees",
        abstract:"We consider the problem of cost-optimal utilization of a crowdsourcing platform for binary, unsupervised classification of a collection of items, given a prescribed error threshold. Workers on the crowdsourcing platform are assumed to be divided into multiple classes, based on their skill, experience, and/or past performance. From the standpoint of the requester, we propose algorithms for acquiring label predictions from workers, and for inferring the true labels of items. These algorithms are provably accurate and near-optimal on the cost of labelling, and adapt to the (a priori unknown) confusion matrices corresponding to the task at hand."
      
    },
    {
        time: "14:30 - 15:00",
        speaker: "Nikhil Karamchandani",
        title: "Group Testing: Something old, Something new, Something borrowed",
        abstract: "The problem of group testing entails inferring a subset of defective items from a (much larger) population, using as few 'pooled tests' as possible. Each pooled test specifies a subset of the items and produces a binary outcome: 'negative' if all the items selected in the test are non-defective, and 'positive' otherwise. While the original motivation for group testing was medical testing, it has since found application across a wide variety of scenarios including wireless communications, DNA sequencing, neighbour discovery, and network tomography. We review some of the main results in group testing and then introduce a new variation of the problem ('cascaded group testing') where each test is specified by an ordered subset of items, and returns the first defective item in the specified order.  "
    },
    {
        time: "15:00 - 15:30",
        speaker: "Jaya Prakash Varma Champati",
        title: "Toward Efficient and Reliable Inference in Edge AI Systems",
        abstract: "In the past decade, Deep Learning (DL) has achieved unprecedented improvement in the inference accuracy for several hard-to-tackle applications such as natural language processing, image classification, object detection and identification, etc. The state-of-the-art DL models that achieve close to 100% inference accuracy are large requiring gigabytes of memory to load them. On the other end of the spectrum, the tinyML community is pushing the limits of compressing DL models to embed them on memory-limited IoT devices. Performing local inference for data samples on the end devices reduces delay, saves network bandwidth, and improves the energy efficiency of the system, but it suffers in terms of low QoE as the small-size DL models have low inference accuracy. To reap the benefits of doing local inference while not compromising on the inference accuracy, we explore the idea of Hierarchical Inference (HI), wherein the local inference is accepted only when it is (likely) correct, otherwise, the data sample is offloaded. In this talk, for the prototypical image classification application, I will present the HI online learning framework for identifying incorrect local inferences. The resulting problem turns out to be a novel partitioning experts problem with continuous action space. I will present algorithms with sub-linear regret and use simulation to demonstrate the efficacy of HI on ImageNet and CIFAR-10 datasets."
    },
    {
        time: "15:30 - 15:50",
        speaker: "Coffee Break"
    },
    
    {
        time: "15:50 - 16:20",
        speaker: "Abhishek Sinha",
        title: "Online α-fair allocation ",
        abstract: "We consider a fair resource allocation problem in the no-regret setting against an unrestricted adversary. The objective is to allocate resources equitably among several agents in an online fashion so that the difference of the aggregate $\\alpha$-fair utilities of the agents achieved by an optimal static clairvoyant allocation and the online policy grows sublinearly with time. The problem is difficult because of the non-separable nature of the global $\\alpha$-fairness function. Previously, it was shown that no online policy could achieve a sublinear standard regret in this problem. In this paper, we propose an efficient online resource allocation policy, called Online Fair Allocation ($\\texttt{OFA}$), that achieves sublinear $c_\\alpha$-approximate regret with approximation factor $c_\\alpha=(1-\\alpha)^{-(1-\\alpha)}\\leq 1.445,$ for $0\\leq \\alpha < 1$. The upper bound on the $c_\\alpha$-regret for this problem exhibits a surprising phase transition phenomenon -- transitioning from a power-law to a constant at the critical exponent $\\alpha=1/{2}.$  Our result also resolves an open problem in designing an efficient no-regret policy for the online job scheduling problem in certain parameter regimes. Along the way, we introduce new algorithmic and analytical techniques, including greedy estimation of the future gradients for non-additive global reward functions and bootstrapping second-order regret bounds, which may be of independent interest."
    },
    {
        time: "16:20 - 16:50",
        speaker: "Vivek Borkar",
    },
    {
        time: "16:50 - 17:00",
        speaker: "Closing Remarks"
    }
];

