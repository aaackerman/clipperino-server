import resolvers from '../clip.resolvers';
import mongoose from 'mongoose';
import { Clip } from '../clip.model';

describe('Resolvers', () => {
  test('clip gets one by id in args', async () => {
    const clip = await Clip.create({
      title: 'Cool clip bro'
    });

    const result = await resolvers.Query.clip(null, { id: clip._id });

    expect(`${result._id}`).toBe(`${clip._id}`);
  });

  test('clips gets all clips', async () => {
    const clips = await Clip.create([
      {
        title: 'Cool clip bro'
      },
      {
        title: 'Wow another clip'
      }
    ]);

    const result = await resolvers.Query.clips(null, {});

    expect(result).toHaveLength(2);

    clips.forEach(p => {
      const match = result.find(r => `${r._id}` === `${p._id}`);
      expect(match).toBeTruthy();
    });
  });
});
