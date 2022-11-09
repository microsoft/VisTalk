# Transformer-based model

## Setup miniconda
Install [Miniconda](https://docs.conda.io/en/latest/miniconda.html)

## Setup Environment

cpu:
```
$ conda create -n vis-talk python=3.9.13 tensorflow=2.5.0  
$ conda activate vis-talk
$ pip install tensorflow-addons==0.13 tensorflowjs==3.18 seqeval==1.2.2
```

gpu:
```
$ conda create -n vis-talk-gpu tensorflow-gpu=2.1.0 python=3.6.12 cudatoolkit=10.1
$ conda activate vis-talk-gpu
$ pip install tensorflow-addons==0.9.1 tensorflowjs==3.8 seqeval==1.2.2
```

## Train Model
```shell
$ yarn train
```

Manually replace the generated _model-data.ts_ to libs/interpreter/src/lib/model-data.ts
