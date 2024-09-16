// -> Cluster Architecture

// Master Node Components
// 1. Manage
// 2. Plan
// 3. Schedule
// 4. Monitor Nodes

// All below components are running on Master Node and available in kube-apiserver

// Control Manager
// etcd - Key-Value Store
// kube - Scheduler

// Worker Node Components
// Host Applications as Containers

// kubelet - Agent running on each node
// kube-proxy - Network Proxy running on each node

// -> Docker vs ContainerD

// docker vs nerdctl vs crictl for k8s
// ctr

// -> ETCD - Key-Value Store

//  ETCD is a distributed key-value store that is Simple and Secure and Fast.

//  {
//     "name": "etcd",
//     "image": "quay.io/coreos/etcd",
//     "version": "3.4.13",
//     "port": "2379",
//     "port": "2380"
//  }

//  ./etcdctl  set key1 value1
//  ./etcdctl  get key1
//  ./etcdctl  watch key1

// -> Etcd in Kubernetes

// Nodes
// Pods
// Services
// ConfigMaps
// Secrets
// Role
// RoleBinding
// Other Resources

// kube Controller Manager

// this is main component of master node that manage other controller see image

// kubelet - Agent running on each node

// kube-proxy - Network Proxy running on each node

// -> Pods

// Pod is the smallest deployable unit in Kubernetes. A Pod represents a single instance of a running process in your cluster.

// Create pods Using yaml file these below tha main components of yaml file

// apiVersion: v1
// kind: Pod
// metadata:
//   name: nginx
//   labels:
//     app: nginx
//     type: front-end
// spec:
//   containers:
//     - name: nginx
//       image: nginx:1.14
