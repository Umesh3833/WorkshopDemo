import parthe from './Images/parthe.jpg'
import bharath from './Images/bharath.png'
import abhishek from './Images/abhisheksinha.jpg'
import jp from './Images/jp.jpg'

export const speakers = [
    {
        name: "Parthe Pandit",
        imageUrl: parthe,
        link: "https://parthe.github.io/",
        bio: "Parthe is a faculty member at C-MInDS. He got his PhD from UCLA and was a postdoc at UCSD.",
        college: "C-MInDS"
    },
    {
        name: "B. N. Bharath",
        imageUrl: bharath,
        link: "https://bharathbettagere.github.io/mywebpage/",
        bio: "B. N. Bharath received the B.E. degree in Electrical and Electronics Engineering from the B.M.S. College of Engineering, Bengaluru, in 2005, and the Ph.D. degree from the Electrical Communication Engineering (ECE) Department, Indian Institute of Science (IISc), Bengaluru in 2013.",
        college: "Indian Institute of Technology Dharwad"
    },
    {
        name: "Abhishek Sinha",
        imageUrl: abhishek,
        link: "https://www.tifr.res.in/~abhishek.sinha/",
        bio: "Abhishek Sinha is currently a faculty member in the School of Technology and Computer Science at the Tata Institute of Fundamental Research, Mumbai, India.",
        college: "Tata Institute of Fundamental Research"
    },
    {
        name: "Jaya Prakash Varma Champati",
        imageUrl: jp,
        link: "https://networks.imdea.org/team/imdea-networks-team/people/jaya-prakash-varma-champati/",
        bio: "Jaya Prakash Champati is an Assistant Professor at IMDEA Networks Institute, where he leads the Edge Networks group.",
        college: "IMDEA Networks Institute"
    }
];
export const events = [
    {
        time: "9:30 - 9:50",
        speaker: "Tea/Coffee"
    },
    {
        time: "9:50 - 10:00",
        speaker: "Opening Remarks"
    },
    {
        time: "10:00 - 10:30",
        speaker: "Aditya Gopalan",
     },
    {
        time: "10:30 - 11:00",
        speaker: "Avhishek Chatterjee",
     },
    {
        time: "11:00 - 11:30",
        speaker: "B.N.Bharath",
        title: "Generalization of FedAvg Under Constrained Polyak-Łojasiewicz Conditions",
        abstract: "This talk focusses on the generalization along with convergence guarantees of the widely used FedAvg algorithm for solving Federated Learning (FL) problems. We prove the generalization bound by handling the optimization error and the Rademacher complexity. Towards handling optimization error, we will look at a new constrained Polyak-Łojasiewicz (PL) type conditions on the (local) loss functions that ensure existence of a global optimal to which the FedAvg algorithms converge linearly after O(log(1/ε)) rounds of communication, where ε is the desired optimality gap. Importantly, we demonstrate that a class of single hidden layer neural networks satisfy the proposed conditions that are required to establish the linear convergence of FedAvg as long as m > nK d , where m is the number of neurons in the hidden layer, n is the number of samples at each client, K is the number of clients, and d is the feature dimension. We also bound the Rademacher Complexity for this class of neural networks using the fact that the neural network parameters are constrained to a neighbourhood around the initialization. We observe Rademacher Complexity decreasing at a rate of O(1/√n) while the generalization error of FedAvg decreases at the rate of O(1/√n)."
    },
    {
        time: "11:30 - 11:50",
        speaker: "Coffee Break"
    },
    {
        time: "11:50 - 12:20",
        speaker: "Abhishek Sinha",
        title: "Caching without regret",
        abstract: "Caching, which refers to dynamically selecting a small subset of files to store on a limited-capacity server to maximize the hits, is a fundamental problem in edge networks. In this talk, we will discuss an emergent class of online caching algorithms that achieve zero regret in various problem settings for any arbitrary file request sequence. Starting from the fundamental limits of a single cache, we will discuss learning-aided caching algorithms that can incorporate untrusted predictions to their advantage. We will then propose efficient online algorithms for a cache network serving multiple users. Finally, we will discuss the problem of fair caching and design new algorithms to maximize the cumulative α-fair utility function."
    },
    {
        time: "12:20 - 12:50",
        speaker: "Krishna Jagannathan",
     },
    {
        time: "12:50 - 14:00",
        speaker: "Lunch"
    },
    {
        time: "14:00 - 14:30",
        speaker: "Jayakrishnan U. Nair",
      },
    {
        time: "14:30 - 15:00",
        speaker: "Nikhil Karamchandani",
       },
    {
        time: "15:00 - 15:30",
        speaker: "Jaya Prakash Varma Champati",
        title: "Toward Efficient and Reliable Inference in Edge AI Systems",
        abstract:"In the past decade, Deep Learning (DL) has achieved unprecedented improvement in the inference accuracy for several hard-to-tackle applications such as natural language processing, image classification, object detection and identification, etc. The state-of-the-art DL models that achieve close to 100% inference accuracy are large requiring gigabytes of memory to load them. On the other end of the spectrum, the tinyML community is pushing the limits of compressing DL models to embed them on memory-limited IoT devices. Performing local inference for data samples on the end devices reduces delay, saves network bandwidth, and improves the energy efficiency of the system, but it suffers in terms of low QoE as the small-size DL models have low inference accuracy. To reap the benefits of doing local inference while not compromising on the inference accuracy, we explore the idea of Hierarchical Inference (HI), wherein the local inference is accepted only when it is (likely) correct, otherwise, the data sample is offloaded. In this talk, for the prototypical image classification application, I will present the HI online learning framework for identifying incorrect local inferences. The resulting problem turns out to be a novel partitioning experts problem with continuous action space. I will present algorithms with sub-linear regret and use simulation to demonstrate the efficacy of HI on ImageNet and CIFAR-10 datasets."
    },
    {
        time: "15:30 - 15:50",
        speaker: "Coffee Break"
    },
    {
        time: "15:50 - 16:20",
        speaker: "Parthe Pandit",
        title: "Fast and scalable training of kernel methods",
        abstract: "In machine learning, kernel machines can often perform similarly or better than deep neural networks (DNNs) on small datasets. There has been a renewed interest in kernel machines due to the discovery of their equivalence to wide neural networks in certain regimes. However, a key feature of DNNs is their ability to scale the model size and training data size independently, whereas in traditional kernel machines model size is tied to data size. Because of this coupling, scaling kernel machines to large data has been computationally challenging. In this paper, we provide a way forward for constructing large-scale *general kernel models*, which are a generalization of kernel machines that decouples the model and training data, and allows training on arbitrarily large datasets. We also provide a fast scalable algorithm to train general kernel models with large number of centers."
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

