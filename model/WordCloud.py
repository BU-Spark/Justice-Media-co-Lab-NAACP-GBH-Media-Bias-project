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



df = pd.read_csv('bostonglobe2014.csv')
#print(df.head())
#print(df.iloc[5,0])

spec_chars = ["!",'"',"#","%","&","'","(",")",
            "*","+",",","-",".","/",":",";","<",
            "=",">","?","@","[","\\","]","^","_",
            "`","{","|","}","~","–", "\xc2", "\xa0",
            "\x80", "\x9c", "\x99", "\x94", "\xad", "\xe2", "\x9d"]

for char in spec_chars:
    df['text'] = df['text'].str.replace(char, ' ')
# df.iloc[5,0]

def tokenize(text, stopwords, max_len = 20):
    return [token for token in gensim.utils.simple_preprocess(text, max_len=max_len) if token not in stopwords]

def target_doc (df):
    articles = df.values.tolist()
    articles_flat = [item for sublist in articles for item in sublist]
    tagged_docs = [gensim.models.doc2vec.TaggedDocument(tokenize(text, [], max_len=200), [i]) for i, text in enumerate(articles_flat)]
    return tagged_docs

# tagged_docs[5]

model = gensim.models.doc2vec.Doc2Vec(vector_size=30, epochs=40, window=2, dm=1)
model.build_vocab(target_doc (df))
model.train(target_doc (df), total_examples=model.corpus_count, epochs=model.epochs)
vector = model.infer_vector(['black', 'african american', 'african-american', 'haitian', 'jamaican', 'west indian', 'dominican'])

# # print(vector)

def pick_random_word(model, threshold=10):
    # pick a random word with a suitable number of occurences
    while True:
        word = random.choice(model.wv.index_to_key)
        if model.wv.get_vecattr(word, "count") > threshold:
            return word

#target_word = pick_random_word(model)
# or uncomment below line, to just pick a word from the relevant domain:
target_word = ['black', 'haitian', 'jamaican', 'dominican', 'women', 'chinese']
diction = {}
for w in target_word:
    print(f'target_word: {repr(w)} model: {model} similar words:')
    for i, (word, sim) in enumerate(model.wv.most_similar(w, topn=15), 1):
        diction[sim] = word
        f_word = f'    {i}. {sim:.2f} {repr(word)}'
        # print(f_word)
    # print()

stopwords = set(STOPWORDS) 
diction = str(diction)

wordcloud = WordCloud(width = 800, height = 800, 
                background_color ='purple', 
                stopwords = stopwords, 
                min_font_size = 10).generate(diction) 
  
# plot the WordCloud image                        
plt.figure(figsize = (8, 8), facecolor = None) 
plt.imshow(wordcloud) 
plt.axis("off") 
plt.tight_layout(pad = 0) 
  
plt.show() 
