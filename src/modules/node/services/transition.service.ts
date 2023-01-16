import { Injectable } from '@nestjs/common';

@Injectable()
export class TransitionService {
  private graph = {
    1: {
      2: ['S', 'A', 'S'],
      3: ['R', 'U', 'B'],
    },
    2: {
      4: ['S', 'P', 'B'],
      5: ['R', 'C', 'S'],
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
