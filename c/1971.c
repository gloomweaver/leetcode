#include <stdbool.h>
#include <stdlib.h>

typedef struct list_node {
  int value;
  struct list_node *next;
} ListNode;

typedef struct graph_node {
  int value;
  ListNode *child;
} GraphNode;

typedef struct graph {
  int size;
  GraphNode **vertices;
} Graph;

ListNode* insert(ListNode* node, int val) {
  ListNode *new_node = malloc(sizeof(ListNode));
  new_node->value = val;
  new_node->next = node;
  return new_node;
}

void destroy_list(ListNode* node) {
  while (node) {
    ListNode *temp = node;
    node = node->next;
    free(temp);
  }
}

#define for_each_list_node(start) \
    for(ListNode* node = start; node != NULL; node = node->next)

Graph* create_graph(int size) {
  GraphNode **vertices = malloc(sizeof(GraphNode*) * size);
  for (int i = 0; i < size; i++) {
    GraphNode *new_node = malloc(sizeof(GraphNode));
    new_node->value = i;
    new_node->child = NULL;
    vertices[i] = new_node;
  }
  Graph* graph = malloc(sizeof(Graph));
  graph->size = size;
  graph->vertices = vertices;
  return graph;
}

void destroy_graph(Graph* g) {
  for (int i = 0; i < g->size; i++) {
    destroy_list(g->vertices[i]->child);
    free(g->vertices[i]);
  }
  free(g->vertices);
  free(g);
}

void add_edge(Graph *g, int begin, int end) {
  g->vertices[begin]->child = insert(g->vertices[begin]->child, end);
  g->vertices[end]->child = insert(g->vertices[end]->child, begin);
}

bool dfs_recurse(Graph *g, bool* visited, int cur, int destination) {
  visited[cur] = true;
  if (cur == destination) {
    return true;
  }
  GraphNode *cur_node = g->vertices[cur];
  for_each_list_node(cur_node->child) {
    if (visited[node->value] == true) {
      continue;
    }
    bool found = dfs_recurse(g, visited, node->value, destination);
    if (found == true) {
      return true;
    }
  }
  return false;
}

bool dfs(Graph* g, int source, int destination) {
  bool *visited = malloc(sizeof(bool) * g->size);
  for (int i = 0; i < g->size; i++) {
    visited[i] = false;
  }
  bool res = dfs_recurse(g, visited, source, destination);
  free(visited);
  return res;
}

bool validPath(int n, int** edges, int edgesSize, int* edgesColSize, int source, int destination) {
  Graph* graph = create_graph(n);

  for (int i = 0; i < edgesSize; i++) {
    add_edge(graph, edges[i][0], edges[i][1]);
  }

  bool res = dfs(graph, source, destination);
  destroy_graph(graph);
  return res;
}
