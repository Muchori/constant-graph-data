import { Injectable } from '@nestjs/common';
import { Graph } from '../graph';

@Injectable()
export class TransitionService {
  //private readonly graph: Graph;
  private graph = {
    1: {
      2: ['S', 'A', 'S'],
    },
    2: {
      3: ['S', 'P', 'S'],
    },
    3: {
      4: ['R', 'U', 'S'],
    },
    4: {
      2: ['R', 'P', 'S'],
      5: ['R', 'A', 'S'],
    },
    5: {
      1: ['R', 'A', 'S'],
      2: ['R', 'P', 'S'],
    },
    // more states and transitions...
  };

  // Returns the next state given a current state and transition
  getNextState(currentState: number, transition: string): number | null {
    const transitions = this.graph[currentState];
    if (!transitions) {
      return null;
    }

    for (const nextState in transitions) {
      if (transitions[nextState].join(',') === transition) {
        return parseInt(nextState);
      }
    }

    return null;
  }

  // Returns the correct path of states given a current state and transition
  // for a bulk of statuses
  getPathForBulk(currentStates: number[], transition: string): number[] {
    const path = [];
    for (const currentState of currentStates) {
      const nextState = this.getNextState(currentState, transition);
      if (nextState) {
        path.push(nextState);
      }
    }

    return path;
  }
}
