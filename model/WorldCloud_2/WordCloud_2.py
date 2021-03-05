import pandas as pd
import os
import random
import gensim.models.doc2vec
from wordcloud import WordCloud, STOPWORDS,ImageColorGenerator
from gensim.models.doc2vec import Doc2Vec
import numpy as np
from os import path
from PIL import Image
from wordcloud import WordCloud, STOPWORDS 
import matplotlib.pyplot as plt 
import networkx as nx
from random import randint 


def display_graph():
    # target_word = ['black', 'haitian', 'jamaican', 'dominican', 'women', 'chinese']
    words = pd.read_csv('similar_words.csv')

    G = nx.Graph()

    j = 1
    for i, row in words.iterrows():
        for j in range(1,len(row)):
            G.add_node(i,label=row[j])
        for j in range(1,len(row)):
            G.add_edge(row[1], row[j])    


    plt.rcParams["figure.figsize"] = 10,10
    options = {
        "font_size": 12,
        "node_size": 30,
        "node_color": "yellow",
        "edgecolors": "black",
        "linewidths": 2,
        "width": 2,
    }
    subgraph = nx.node_connected_component(G,'chinese')
    nx.draw(G.subgraph(subgraph), with_labels=True, **options)

    plt.show()


display_graph()
