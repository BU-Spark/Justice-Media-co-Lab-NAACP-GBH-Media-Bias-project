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
from itertools import count
import networkx as nx

# target_word = ['black', 'haitian', 'jamaican', 'dominican', 'women', 'chinese']
words = pd.read_csv('similar_words.csv')
# print(words)
G = nx.Graph()

j = 1
for i, row in words.iterrows():
    for j in range(1,len(row)):
        G.add_node(i,label=row[j])
    for j in range(1,len(row)):
        G.add_edge(row[1], row[j])    

# print(G.nodes())

# drawing nodes and edges separately so we can capture collection for colobar
pos = nx.kamada_kawai_layout(G)
betCent = nx.betweenness_centrality(G, normalized=True, endpoints=True)
node_color = [18000.0 * G.degree(v) for v in G]
node_size = [v * 8000 for v in betCent.values()]


# G = nx.node_connected_component(G,'black')
plt.figure(figsize=(10,10))
ec = nx.draw_networkx_edges(
    G, pos, 
    alpha=0.8, 
    edge_color = 'black',
    connectionstyle=f"arc3,rad={0.2}")

nc = nx.draw_networkx_nodes(
    G, pos, 
    node_size = node_size, 
    node_color = node_color)
nx.draw_networkx_labels(G,pos, font_size = 10)

# plt.colorbar(nc)
plt.axis('off')
plt.show()
